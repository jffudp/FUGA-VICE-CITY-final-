@echo off
cd /d "%~dp0"
start "Servidor Fuga" /b "C:\Users\jeffe\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "%~dp0servidor-local.js"
timeout /t 2 /nobreak >nul
start "Fuga Vice City" http://localhost:8123
echo La pagina esta abierta en el navegador.
echo No cierres esta ventana mientras la uses.
pause
