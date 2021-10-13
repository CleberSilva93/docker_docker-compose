# Docker / Docker-compose

## Sobre

- O que é docker e suas vantagens
- Usar docker-compose -> Orquestrador de imagens do docker
- Como criar um container ->
- Como é feita a comunicação entre containers -> via TCP
- Dockerfile -> Setup para criação dos containers
- Gerenciar instalação de pacotes

## O que desenvolvemos

- Criação de uma API que irá rodar seus serviços dentro de um container.
- Container para API e outra API para uma image do Mongodb.
- Criar registro no mongodb quando acessado a rota padrão "/".

## O que foi usado

- Docker
- Express

## DockerFile

- FROM -> Qual versão de qual máquina a ser utilizada
- WORKDIR -> Diretório dentro da máquina que iremos trabalhar
- COPY -> Define quais arquivos iremos copiar para dentro da máquina.
- RUN -> Roda comandos
- EXPOSE -> Define uma porta a qual irá permitir acesso à máquina
- CMD -> Como único para rodar a aplicação

## .dockerignore

- Serve para definir quais arquivos o docker irá ignorar qual for copiar.

### Gerar uma imagem do container

- docker build -t nome/dockernode .

### Rodar uma image

- docker run -p 3000:3000 -d node/dockernode

## docker-compose.yml

- version -> Versão do docker-compose utilizada
- services -> Os serviços a serem executados:
  nomedoserviço:
  build: -> Define a onde estará os arquivos ( . )
  command: -> comando a ser executado
  volumes: -> Define para qual pasta será enviada os arquivos quando houver alteração nos arquivos de "espelho"

### Rodar a imagem com docker-compose

- docker-compose up -> Estar na mesma pasta do docker-compose.yml, ele irá construir e rodar o container. Chamamos isso de orquestração.
- docker-compose down -> Encerra o container.
- docker-compose up -d -> Roda o container em background
