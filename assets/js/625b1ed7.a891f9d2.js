"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[168],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6103:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={},l="Authentication",c={unversionedId:"authentication",id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"- Basic Auth",source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/docs/authentication",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/authentication.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Status Indicators",permalink:"/docs/status-indicators"},next:{title:"Keyboard Shortcuts",permalink:"/docs/searching"}},p=[{value:"Built-In Auth",id:"built-in-auth",children:[{value:"Setting Up Authentication",id:"setting-up-authentication",children:[]},{value:"Hash Password",id:"hash-password",children:[]},{value:"Logging In and Out",id:"logging-in-and-out",children:[]},{value:"Enabling Guest Access",id:"enabling-guest-access",children:[]},{value:"Granular Access",id:"granular-access",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Security",id:"security",children:[]}]},{value:"Keycloak",id:"keycloak",children:[{value:"1. Deploy Keycloak",id:"1-deploy-keycloak",children:[]},{value:"2. Setup Keycloak Users",id:"2-setup-keycloak-users",children:[]},{value:"3. Enable Keycloak in Dashy Config File",id:"3-enable-keycloak-in-dashy-config-file",children:[]},{value:"4. Add groups and roles (Optional)",id:"4-add-groups-and-roles-optional",children:[]}]},{value:"Alternative Authentication Methods",id:"alternative-authentication-methods",children:[{value:"Authentication Server",id:"authentication-server",children:[]},{value:"VPN",id:"vpn",children:[]},{value:"IP-Based Access",id:"ip-based-access",children:[]},{value:"Web Server Authentication",id:"web-server-authentication",children:[]},{value:"OAuth Services",id:"oauth-services",children:[]},{value:"Static Site Hosting Providers",id:"static-site-hosting-providers",children:[]}]}],u={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#built-in-auth"},"Basic Auth"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-authentication"},"Setting Up Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#hash-password"},"Hash Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#logging-in-and-out"},"Logging In and Out")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enabling-guest-access"},"Guest Access")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#granular-access"},"Per-User Access")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#security"},"Security Considerations")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#keycloak"},"Keycloak Auth"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-deploy-keycloak"},"Deploying Keycloak")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-setup-keycloak-users"},"Setting up Keycloak")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-enable-keycloak-in-dashy-config-file"},"Configuring Dashy for Keycloak")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alternative-authentication-methods"},"Alternative Authentication Methods"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#vpn"},"VPN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ip-based-access"},"IP-Based Access")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#web-server-authentication"},"Web Server Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#oauth-services"},"OAuth Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#static-site-hosting-providers"},"Auth on Cloud Hosting Services"))))),(0,i.kt)("h2",{id:"built-in-auth"},"Built-In Auth"),(0,i.kt)("p",null,"Dashy has a basic login page included, and frontend authentication. You can enable this by adding users to the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," section under ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.yml"),". If this section is not specified, then no authentication will be required to access the app, and it the homepage will resolve to your dashboard."),(0,i.kt)("h3",{id:"setting-up-authentication"},"Setting Up Authentication"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," property takes an array of users. Each user needs to include a username, hash and optional user type (",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"normal"),"). The hash property is a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"SHA-256 Hash")," of your desired password. "),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  auth:\n    users:\n    - user: alicia\n      hash: 4D1E58C90B3B94BCAD9848ECCACD6D2A8C9FBC5CA913304BBA5CDEAB36FEEFA3\n      type: admin\n    - user: bob\n      hash: 5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8\n")),(0,i.kt)("h3",{id:"hash-password"},"Hash Password"),(0,i.kt)("p",null,"Dashy uses ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sha-256"},"SHA-256 Hash"),", a 64-character string, which you can generate using an online tool, such as ",(0,i.kt)("a",{parentName:"p",href:"https://passwordsgenerator.net/sha256-hash-generator/"},"this one")," or ",(0,i.kt)("a",{parentName:"p",href:"https://gchq.github.io/CyberChef/"},"CyberChef")," (which can be self-hosted/ ran locally)."),(0,i.kt)("p",null,"A hash is a one-way cryptographic function, meaning that it is easy to generate a hash for a given password, but very hard to determine the original password for a given hash. This means, that so long as your password is long, strong and unique, it is safe to store it's hash in the clear. Having said that, you should never reuse passwords, hashes can be cracked by iterating over known password lists, generating a hash of each."),(0,i.kt)("h3",{id:"logging-in-and-out"},"Logging In and Out"),(0,i.kt)("p",null,"Once authentication is enabled, so long as there is no valid token in cookie storage, the application will redirect the user to the login page. When the user enters credentials in the login page, they will be checked, and if valid, then a token will be generated, and they can be redirected to the home page. If credentials are invalid, then an error message will be shown, and they will remain on the login page. Once in the application, to log out the user can click the logout button (in the top-right), which will clear cookie storage, causing them to be redirected back to the login page."),(0,i.kt)("h3",{id:"enabling-guest-access"},"Enabling Guest Access"),(0,i.kt)("p",null,"With authentication setup, by default no access is allowed to your dashboard without first logging in with valid credentials. Guest mode can be enabled to allow for read-only access to a secured dashboard by any user, without the need to log in. A guest user cannot write any changes to the config file, but can apply modifications locally (stored in their browser). You can enable guest access, by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.auth.enableGuestAccess: true"),"."),(0,i.kt)("h3",{id:"granular-access"},"Granular Access"),(0,i.kt)("p",null,"You can use the following properties to make certain sections or items only visible to some users, or hide sections and items from guests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hideForUsers")," - Section or Item will be visible to all users, except for those specified in this list"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showForUsers")," - Section or Item will be hidden from all users, except for those specified in this list"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hideForGuests")," - Section or Item will be visible for logged in users, but not for guests")),(0,i.kt)("p",null,"For Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Code Analysis & Monitoring\n  icon: fas fa-code\n  displayData:\n    cols: 2\n    hideForUsers: [alicia, bob]\n  items:\n    ...\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Deployment Pipelines\n  icon: fas fa-rocket\n  displayData:\n    hideForGuests: true\n  items:\n    - title: Hide Me\n      displayData:\n        hideForUsers: [alicia, bob]\n")),(0,i.kt)("h3",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"Any user who is not an admin (with ",(0,i.kt)("inlineCode",{parentName:"p"},"type: admin"),") will not be able to write changes to disk."),(0,i.kt)("p",null,"You can also prevent any user from writing changes to disk, using ",(0,i.kt)("inlineCode",{parentName:"p"},"preventWriteToDisk"),". Or prevent any changes from being saved locally in browser storage, using ",(0,i.kt)("inlineCode",{parentName:"p"},"preventLocalSave"),". Both properties can be found under ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuring#appconfig-optional"},(0,i.kt)("inlineCode",{parentName:"a"},"appConfig")),"."),(0,i.kt)("p",null,"To disable all UI config features, including View Config, set ",(0,i.kt)("inlineCode",{parentName:"p"},"disableConfiguration"),"."),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"With basic auth, all logic is happening on the client-side, which could mean a skilled user could manipulate the code to view parts of your configuration, including the hash. If the SHA-256 hash is of a common password, it may be possible to determine it, using a lookup table, in order to find the original password. Which can be used to manually generate the auth token, that can then be inserted into session storage, to become a valid logged in user. Therefore, you should always use a long, strong and unique password, and if you instance contains security-critical info and/ or is exposed directly to the internet, and alternative authentication method may be better. The purpose of the login page is merely to prevent immediate unauthorized access to your homepage."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#"},"\u2b06\ufe0f Back to Top"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"keycloak"},"Keycloak"),(0,i.kt)("p",null,"Dashy also supports using a ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloack")," authentication server. The setup for this is a bit more involved, but it gives you greater security overall, useful for if your instance is exposed to the internet."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/about.html"},"Keycloak")," is a Java-based ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/keycloak/keycloak"},"open source"),", high-performance, secure authentication system, supported by ",(0,i.kt)("a",{parentName:"p",href:"https://www.redhat.com/en"},"RedHad"),". It is easy to setup (",(0,i.kt)("a",{parentName:"p",href:"https://quay.io/repository/keycloak/keycloak"},"with Docker"),"), and enables you to secure multiple self-hosted applications with single-sign on using standard protocols (OpenID Connect, OAuth 2.0, SAML 2.0 and social login). It's also very customizable, you can write or use custom ",(0,i.kt)("a",{parentName:"p",href:"https://wjw465150.gitbooks.io/keycloak-documentation/content/server_development/topics/themes.html"},"themes"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/extensions.html"},"plugins"),", ",(0,i.kt)("a",{parentName:"p",href:"https://wjw465150.gitbooks.io/keycloak-documentation/content/server_admin/topics/authentication/password-policies.html"},"password policies")," and more.\nThe following guide will walk you through setting up Keycloak with Dashy. If you already have a Keycloak instance configured, then skip to Step 3."),(0,i.kt)("h3",{id:"1-deploy-keycloak"},"1. Deploy Keycloak"),(0,i.kt)("p",null,"First thing to do is to spin up a new instance of Keycloak. You will need ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker installed"),", and can then choose a tag, and pull the container from ",(0,i.kt)("a",{parentName:"p",href:"https://quay.io/repository/keycloak/keycloak"},"quay.io/keycloak/keycloak")),(0,i.kt)("p",null,"Use the following run command, replacing the attributes (default credentials, port and name), or incorporate this into your docker-compose file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  -p 8081:8080 \\\n  --name auth-server \\\n  -e KEYCLOAK_USER=admin \\\n  -e KEYCLOAK_PASSWORD=admin \\\n  quay.io/keycloak/keycloak:15.0.2\n")),(0,i.kt)("p",null,"If you need to pull from DockerHub, a non-official image is available ",(0,i.kt)("a",{parentName:"p",href:"https://registry.hub.docker.com/r/jboss/keycloak"},"here"),". Or if you would prefer not to use Docker, you can also directly install Keycloak from source, following ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/getting_started/index.html"},"this guide"),"."),(0,i.kt)("p",null,"You should now be able to access the Keycloak web interface, using the port specified above (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8081"),"), login with the default credentials, and when prompted create a new password."),(0,i.kt)("h3",{id:"2-setup-keycloak-users"},"2. Setup Keycloak Users"),(0,i.kt)("p",null,"Before we can use Keycloak, we must first set it up with some users. Keycloak uses Realms (similar to tenants) to create isolated groups of users. You must create a Realm before you will be able to add your first user. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Head over to the admin console"),(0,i.kt)("li",{parentName:"ol"},"In the top-left corner there is a dropdown called 'Master', hover over it and then click 'Add Realm'"),(0,i.kt)("li",{parentName:"ol"},"Give your realm a name, and hit 'Create'")),(0,i.kt)("p",null,"You can now create your first user."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the left-hand menu, click 'Users', then 'Add User'"),(0,i.kt)("li",{parentName:"ol"},"Fill in the form, including username and hit 'Save'"),(0,i.kt)("li",{parentName:"ol"},"Under the 'Credentials' tab, give the new user an initial password. They will be prompted to change this after first login")),(0,i.kt)("p",null,"The last thing we need to do in the Keycloak admin console is to create a new client"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Within your new realm, navigate to 'Clients' on the left-hand side, then click 'Create' in the top-right"),(0,i.kt)("li",{parentName:"ol"},"Choose a 'Client ID', set 'Client Protocol' to 'openid-connect', and for 'Valid Redirect URIs' put a URL pattern to where you're hosting Dashy (if you're just testing locally, then * is fine), and do the same for the 'Web Origins' field"),(0,i.kt)("li",{parentName:"ol"},"Make note of your client-id, and click 'Save'")),(0,i.kt)("h3",{id:"3-enable-keycloak-in-dashy-config-file"},"3. Enable Keycloak in Dashy Config File"),(0,i.kt)("p",null,"Now that your Keycloak instance is up and running, all that's left to do is to configure Dashy to use it. Under ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig"),", set ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.enableKeycloak: true"),", then fill in the details in ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.keycloak"),", including: ",(0,i.kt)("inlineCode",{parentName:"p"},"serverUrl")," - the URL where your Keycloak instance is hosted, ",(0,i.kt)("inlineCode",{parentName:"p"},"realm")," - the name you gave your Realm, and ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," - the Client ID you chose.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  ...\n  auth:\n    enableKeycloak: true\n    keycloak:\n      serverUrl: 'http://localhost:8081'\n      realm: 'alicia-homelab'\n      clientId: 'dashy'\n")),(0,i.kt)("p",null,"Note that if you are using Keycloak V 17 or older, you will also need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"legacySupport: true")," (also under ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.auth.keycloak"),"). This is because the API endpoint was updated in later versions."),(0,i.kt)("h3",{id:"4-add-groups-and-roles-optional"},"4. Add groups and roles (Optional)"),(0,i.kt)("p",null,"Keycloak allows you to assign users roles and groups. You can use these values to configure who can access various sections or items in Dashy.\nKeycloak server administration and configuration is a deep topic; please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/index.html#assigning-permissions-and-access-using-roles-and-groups"},"server admin guide")," to see details about creating and assigning roles and groups.\nOnce you have groups or roles assigned to users you can configure access under each section or item ",(0,i.kt)("inlineCode",{parentName:"p"},"displayData.showForKeycloakUser")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"displayData.hideForKeycloakUser"),".\nBoth show and hide configurations accept a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"groups")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"roles")," that limit access. If a users data matches one or more items in these lists they will be allowed or excluded as defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"sections:\n  - name: DeveloperResources\n    displayData:\n      showForKeycloakUsers:\n        roles: ['canViewDevResources']\n      hideForKeycloakUsers:\n        groups: ['ProductTeam']\n    items:\n      - title: Not Visible for developers\n        displayData:\n          hideForKeycloakUsers:\n            groups: ['DevelopmentTeam']\n")),(0,i.kt)("p",null,"Depending on how you're hosting Dashy and Keycloak, you may also need to set some HTTP headers, to prevent a CORS error. This would typically be the ",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin [URL-of Dashy]")," on your Keycloak instance. See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/management.md#setting-headers"},"Setting Headers")," guide in the management docs for more info."),(0,i.kt)("p",null,"Your app is now secured :) When you load Dashy, it will redirect to your Keycloak login page, and any user without valid credentials will be prevented from accessing your dashboard."),(0,i.kt)("p",null,"From within the Keycloak console, you can then configure things like time-outs, password policies, etc. You can also backup your full Keycloak config, and it is recommended to do this, along with your Dashy config. You can spin up both Dashy and Keycloak simultaneously and restore both applications configs using a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, and this is recommended."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"alternative-authentication-methods"},"Alternative Authentication Methods"),(0,i.kt)("p",null,"If you are self-hosting Dashy, and require secure authentication to prevent unauthorized access, then you can either use Keycloak, or one of the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#authentication-server"},"Authentication Server")," - Put Dashy behind a self-hosted auth server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#vpn"},"VPN")," - Use a VPN to tunnel into the network where Dashy is running"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ip-based-access"},"IP-Based Access")," - Disallow access from all IP addresses, except your own"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#web-server-authentication"},"Web Server Authentication")," - Enable user control within your web server or proxy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#oauth-services"},"OAuth Services")," - Implement a user management system using a cloud provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#static-site-hosting-providers"},"Password Protection (for cloud providers)")," - Enable password-protection on your site")),(0,i.kt)("h3",{id:"authentication-server"},"Authentication Server"),(0,i.kt)("h5",{id:"authelia"},"Authelia"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.authelia.com/"},"Authelia")," is an open-source full-featured authentication server, which can be self-hosted and either on bare metal, in a Docker container or in a Kubernetes cluster. It allows for fine-grained access control rules based on IP, path, users etc, and supports 2FA, simple password access or bypass policies for your domains. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/authelia/authelia.git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cd authelia/examples/compose/lite")),(0,i.kt)("li",{parentName:"ul"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"users_database.yml")," the default username and password is authelia"),(0,i.kt)("li",{parentName:"ul"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"configuration.yml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," with your respective domains and secrets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up -d"))),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.authelia.com/docs/"},"Authelia docs")),(0,i.kt)("h3",{id:"vpn"},"VPN"),(0,i.kt)("p",null,"A catch-all solution to accessing services running from your home network remotely is to use a VPN. It means you do not need to worry about implementing complex authentication rules, or trusting the login implementation of individual applications. However it can be inconvenient to use on a day-to-day basis, and some public and corporate WiFi block VPN connections. Two popular VPN protocols are ",(0,i.kt)("a",{parentName:"p",href:"https://openvpn.net/"},"OpenVPN")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"WireGuard")),(0,i.kt)("h3",{id:"ip-based-access"},"IP-Based Access"),(0,i.kt)("p",null,"If you have a static IP or use a VPN to access your running services, then you can use conditional access to block access to Dashy from everyone except users of your pre-defined IP address. This feature is offered by most cloud providers, and supported by most web servers."),(0,i.kt)("h5",{id:"apache"},"Apache"),(0,i.kt)("p",null,"In Apache, this is configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},".htaccess")," file in Dashy's root folder, and should look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Order Deny,Allow\nDeny from all\nAllow from [your-ip]\n")),(0,i.kt)("h5",{id:"nginx"},"NGINX"),(0,i.kt)("p",null,"In NGINX you can specify ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-proxied-http/"},"control access")," rules for a given site in your ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.conf")," or hosts file. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"server {\n    listen 80;\n    server_name www.dashy.example.com;\n    location / {\n        root /path/to/dashy/;\n        passenger_enabled on;\n        allow [your-ip];\n        deny all;\n    }\n  }\n")),(0,i.kt)("h5",{id:"caddy"},"Caddy"),(0,i.kt)("p",null,"In Caddy, ",(0,i.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/caddyfile/matchers"},"Request Matchers")," can be used to filter requests "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'dashy.site {\n    @public_networks not remote_ip [your-ip]\n    respond @public_networks "Access denied" 403\n}\n')),(0,i.kt)("h3",{id:"web-server-authentication"},"Web Server Authentication"),(0,i.kt)("p",null,"Most web servers make password protecting certain apps very easy. Note that you should also set up HTTPS and have a valid certificate in order for this to be secure."),(0,i.kt)("h5",{id:"apache-1"},"Apache"),(0,i.kt)("p",null,"First crate a ",(0,i.kt)("inlineCode",{parentName:"p"},".htaccess")," file in Dashy's route directory. Specify the auth type and path to where you want to store the password file (usually the same folder). For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'AuthType Basic  \nAuthName "Please Sign into Dashy"  \nAuthUserFile /path/dashy/.htpasswd  \nrequire valid-user\n')),(0,i.kt)("p",null,"Then create a ",(0,i.kt)("inlineCode",{parentName:"p"},".htpasswd")," file in the same directory. List users and their hashed passwords here, with one user on each line, and a colon between username and password (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"[username]:[hashed-password]"),"). You will need to generate an MD5 hash of your desired password, this can be done with an ",(0,i.kt)("a",{parentName:"p",href:"https://www.web2generators.com/apache-tools/htpasswd-generator"},"online tool"),".  Your file will look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"alicia:$apr1$jv0spemw$RzOX5/GgY69JMkgV6u16l0\n")),(0,i.kt)("h5",{id:"nginx-1"},"NGINX"),(0,i.kt)("p",null,"NGINX has an ",(0,i.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html"},"authentication module")," which can be used to add passwords to given sites, and is fairly simple to set up. Similar to above, you will need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},".htpasswd")," file. Then just enable auth and specify the path to that file, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'location / {\n  auth_basic "closed site";\n  auth_basic_user_file conf/htpasswd;\n}\n')),(0,i.kt)("h5",{id:"caddy-1"},"Caddy"),(0,i.kt)("p",null,"Caddy has a ",(0,i.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/caddyfile/directives/basicauth"},"basic-auth")," directive, where you specify a username and hash. The password hash needs to be base-64 encoded, the ",(0,i.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/command-line#caddy-hash-password"},(0,i.kt)("inlineCode",{parentName:"a"},"caddy hash-password"))," command can help with this. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"basicauth /secret/* {\n    alicia JDJhJDEwJEVCNmdaNEg2Ti5iejRMYkF3MFZhZ3VtV3E1SzBWZEZ5Q3VWc0tzOEJwZE9TaFlZdEVkZDhX\n}\n")),(0,i.kt)("p",null,"For more info about implementing a single sign on for all your apps with Caddy, see ",(0,i.kt)("a",{parentName:"p",href:"https://joshstrange.com/securing-your-self-hosted-apps-with-single-signon/"},"this tutorial")),(0,i.kt)("h5",{id:"lighttpd"},"Lighttpd"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.lighttpd.net/lighttpd2/mod_auth.html"},"mod_auth")," module to secure your site with Lighttpd. Like with Apache, you need to first create a password file listing your usersnames and hashed passwords, but in Lighttpd, it's usually called ",(0,i.kt)("inlineCode",{parentName:"p"},".lighttpdpassword"),"."),(0,i.kt)("p",null,"Then in your ",(0,i.kt)("inlineCode",{parentName:"p"},"lighttpd.conf")," file (usually in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/lighttpd/")," directory), load in the mod_auth module, and configure it's directives. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'server.modules += ( "mod_auth" )\nauth.debug = 2\nauth.backend = "plain"\nauth.backend.plain.userfile = "/home/lighttpd/.lighttpdpassword"\n\n$HTTP["host"] == "dashy.my-domain.net" {\n  server.document-root = "/home/lighttpd/dashy.my-domain.net/http"\n  server.errorlog = "/var/log/lighttpd/dashy.my-domain.net/error.log"\n  accesslog.filename = "/var/log/lighttpd/dashy.my-domain.net/access.log"\n  auth.require = (\n    "/docs/" => (\n      "method" => "basic",\n      "realm" => "Password protected area",\n      "require" => "user=alicia"\n    )\n  )\n}\n')),(0,i.kt)("p",null,"Restart your web server for changes to take effect."),(0,i.kt)("h3",{id:"oauth-services"},"OAuth Services"),(0,i.kt)("p",null,"There are also authentication services, such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/"},"Ory.sh"),", ",(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/"},"Okta"),", ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0"),", ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/auth/"},"Firebase"),". Implementing one of these solutions would involve some changes to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/Auth.js"},(0,i.kt)("inlineCode",{parentName:"a"},"Auth.js"))," file, but should be fairly straight forward."),(0,i.kt)("h3",{id:"static-site-hosting-providers"},"Static Site Hosting Providers"),(0,i.kt)("p",null,"If you are hosting Dashy on a cloud platform, you will probably find that it has built-in support for password protected access to web apps. For more info, see the relevant docs for your provider, for example: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.netlify.com/visitor-access/password-protection/"},"Netlify Password Protection"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/teams/access/"},"Cloudflare Access"),", ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cognito/"},"AWS Cognito"),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/scenario-secure-app-authentication-app-service"},"Azure Authentication")," and ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com/docs/platform/projects#password-protection"},"Vercel Password Protection"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#"},"\u2b06\ufe0f Back to Top"))))}h.isMDXComponent=!0}}]);