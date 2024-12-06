import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EducationLevel, User } from '../../_models/user';
import { UsersService } from '../../_services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserActionEvent } from '../../_interfaces/user-action-event.interface';
import { AlertComponent } from '../alert/alert.component';
import { UserDeleteModalComponent } from '../user-delete-modal/user-delete-modal.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, UserCardComponent, FormsModule, AlertComponent, UserDeleteModalComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  alertType: 'success' | 'warning' | 'danger' = 'success';
  alertMessage: string = '';

  form!: FormGroup;
  titleForm!: string;
  users: User[] = [];

  visibleTable: boolean = true;
  visibleForm: boolean = false;

  userName!: string;
  userId!: number;

  isModalVisible: boolean = false;
  searchTerm: string = '';

  showAlert: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  //Lista os Usuários
  loadUsers(): void {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
    }, error => console.error('Erro ao carregar usuários:', error));
  }

    //Altera para o form de cadastro
  ViewFormAdd(): void {
    this.visibleTable = !this.visibleTable;
    this.visibleForm = !this.visibleForm;
    this.titleForm = 'Cadastro de usuário';

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      surname: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthdate: new FormControl(null, [Validators.required, this.dateNotInFuture]),
      education: new FormControl(null, [Validators.required])

    });
  }

    //Valida o formulario
  SendForm(): void {
    if (this.form.invalid) {
      this.showAlerts('danger', 'Por favor, preencha todos os campos corretamente.')
      return;
    }

    const user: User = this.form.value;
    console.log(user);
    if (user.userId > 0) {
      this.userService.updateUser(user).subscribe({
        next: () => (this.showAlerts('success', 'Usuário atualizado com sucesso!'),
          this.visibleTable = true,
          this.visibleForm = false,
          this.loadUsers()),
        error: (error) => console.error('Erro ao inserir pessoa:', error),
      });
    }
    else {
      this.userService.addUser(user).subscribe({
        next: () => (this.showAlerts('success', 'Usuário cadastrado com sucesso!'),
          this.visibleTable = true,
          this.visibleForm = false,
          this.loadUsers()),
        error: (error) => console.error('Erro ao inserir pessoa:', error),
      });
    }
  }

    //Carrega os dados do form com o usuário selecionado para atualizar
  UpdateUser(userId: number): void {
    this.ViewFormAdd();
    this.userService.getUserId(userId).subscribe(result => {
      this.titleForm = `Atualizar ${result.name} ${result.surname}`;
      this.form = new FormGroup({
        userId: new FormControl(result.userId),
        name: new FormControl(result.name, [Validators.required, Validators.maxLength(255)]),
        surname: new FormControl(result.surname, [Validators.required, Validators.maxLength(255)]),
        email: new FormControl(result.email, [Validators.required, Validators.email]),
        birthdate: new FormControl(new Date(result.birthdate).toISOString().slice(0, 10), [Validators.required, this.dateNotInFuture]),
        education: new FormControl(result.education, [Validators.required])
      });
    });
  }

    //Deleta user ou fecha o modal delete
  DeleteModalClose(confirmed: boolean): void {
    this.isModalVisible = false;
    if (confirmed) {
      this.DeleteUser(this.userId);
    }
  }

  //Exibir o modal delete
  DisplayModalDelete(userId: number, userName: string): void {
    this.isModalVisible = true;
    this.userId = userId;
    this.userName = userName;
  }

  //Fecha o Modal
  CloseModal(): void {
    this.isModalVisible = false;
  }

  //Deleta usuario selecionado
  DeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe((result) => {
      this.isModalVisible = false;
      this.showAlerts('success', 'Pessoa excluida com sucesso')
      this.loadUsers();
    });
  }

  //Formata a data de nascimento Json
  dateNotInFuture(control: AbstractControl): { [key: string]: boolean } | null {
    const today = new Date();
    const birthdate = new Date(control.value);

    if (birthdate > today) {
      return { invalidDate: true };
    }
    return null;
  }

  //Formata a escolariada para apresentar na tela string do que number
  educationLevel(education: number): string {
    var result;
    return result = EducationLevel[education].toString();
  }

  //Botoes do componente do UserCard
  infoUserSelec(event: UserActionEvent) {
    if (event.action === 'delete') {
      this.DisplayModalDelete(event.Id, event.Name);
    } else if (event.action === 'update') {
      this.UpdateUser(event.Id);
    };
  }

  //Filtra pelo Nome, Sobrenome e Educação
  get filteredUsers() {
    return this.users.filter(user => {
      const term = this.searchTerm.toLowerCase();
      return (
        user.name.toLowerCase().includes(term) ||
        user.surname.toLowerCase().includes(term) ||
        this.educationLevel(user.education).toLowerCase().includes(term)
      );
    });
  }

  //Modal de alerts
  showAlerts(type: 'success' | 'warning' | 'danger', message: string) {
    this.alertType = type;
    this.alertMessage = message;
    setTimeout(() => {
      this.alertMessage = '';
    }, 3000);
  }

}

