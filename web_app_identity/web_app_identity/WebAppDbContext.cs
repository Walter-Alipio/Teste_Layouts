using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using web_app_identity.Models;

namespace web_app_identity
{
    //[DbContext(typeof(WebAppDbContext))]
    public class WebAppDbContext : IdentityDbContext
    {        
        public WebAppDbContext(DbContextOptions<WebAppDbContext> options) 
            : base(options)
        {
            
        }

        public DbSet<CadastroBasico> CadastroBasicos { get; set; }
    }
}
