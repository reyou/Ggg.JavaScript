using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(syncfusion_aspnet_web.Startup))]
namespace syncfusion_aspnet_web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
