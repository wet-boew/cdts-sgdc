::Automatically configure Git/NPM/system account proxy settings

::Git proxy settings
git config --global http.proxy http://%USERNAME%@proxy.prv:80
git config --global https.proxy https://%USERNAME%@proxy.prv:443
git config --global url."https://github.com/".insteadOf git@github.com:
git config --global url."https://".insteadOf git://

::Copy F: drive's Git config file to C: user profile
copy %HOMEDRIVE%\.gitconfig %USERPROFILE%\.gitconfig

::NPM proxy settings
if not exist "%APPDATA%\npm" mkdir %APPDATA%\npm
call npm config set proxy http://%USERNAME%@proxy.prv:80
call npm config set https-proxy http://%USERNAME%@proxy.prv:443