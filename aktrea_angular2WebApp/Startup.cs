using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(aktrea_angular2WebApp.Startup))]
namespace aktrea_angular2WebApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
