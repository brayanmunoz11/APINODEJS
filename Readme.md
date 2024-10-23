Configuraciones Iniciales:
1. Instalar Serverless de manera global: npm install -g serverless
2. Configurar las credenciales de AAAA WWWW SSSS.
    1.1 Key: --------------AKIAYWBJY--------------LZHPFWHH3ZL--------------
    1.2 Secret: --------------3bsQvQ0YMHPrGhlHWHfT--------------0R0Tdymyl2F3072ISeS0--------------

//BORRAR GUIONES

RUN  FunctionGETStartWars
Ejecutar en la terminal
1. cd .\FunctionGETStartWars\
2. npm i
3. Run local:
    3.1. sls offline  
4. Deploy AWS:
    4.1 sls deploy
5. Test:
    5.1 npm run test

RUN  FunctionPOSTStartWars
Ejecutar en la terminal
1. cd .\FunctionPOSTStarWars\
2. npm i
3. Run local:
    3.1. sls offline --httpPort 4000 --lambdaPort 4002
4. Deploy AWS:
    4.1 sls deploy
5. Test:
    5.1 npm run test




