# raynetTest

Pro spuštení projektu si naklonujte projekt, poté si naistalujte npm baličky (ve složce my-app spusťte příkaz "npm install").  
Poté už stačí jen Reaktí aplikaci spustit - spusťte příkaz "npm start" ve složce my-app.  

Aplikace používá mojí trialovou verzi na RayNet.cz, ale je možné se přepnout i na jiný účet. Stačí si v souboru my-app/src/service/Service.ts změnit konfiguraci hlavičky requestů
(ve funkci createRequestInit() zmenit hlavičky "Authorization" a "X-Instance-Name").