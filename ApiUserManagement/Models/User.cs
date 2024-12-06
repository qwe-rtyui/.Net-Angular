using System.ComponentModel.DataAnnotations;

namespace ApiUserManagement.Models
{
    public class User{
        public int UserId { get; set; }
        [Required]
        public string Name { get; set; }

        [Required]
        public string Surname { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Por favor, insira um e-mail válido.")]
        public string Email { get; set; }

        [Required]
        [CustomValidation(typeof(UserValidator), "ValidateBirthdate")]
        public DateTime Birthdate { get; set; }

        [Range(0, 4)]
        [EnumDataType(typeof(EducationLevel))]
        public int Education { get; set; }
        // public string Name { get; set; }
        // public string Surname { get; set; }
        // public string Email { get; set; }
        // public DateTime Birthdate { get; set; }
        // public int Education { get; set; }
    }

    public enum EducationLevel
    {
        Infantil = 0,
        Fundamental = 1,
        Médio = 2,
        Superior = 3
    }

    public static class UserValidator
    {
        public static ValidationResult ValidateBirthdate(DateTime birthdate, ValidationContext context)
        {
            if (birthdate > DateTime.Now)
            {
                return new ValidationResult("A data de nascimento não pode ser maior que a data de hoje.");
            }
            return ValidationResult.Success;
        }
    }
}