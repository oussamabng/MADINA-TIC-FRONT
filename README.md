# Madina-tic-frontend
a react based frontend for madina-tic 1cs esi project forked from <a href="https://github.com/th3happybit/MADINA-TIC-FRONT">here<a/>
## Deployment:

### Manual deployment
	- requirements:
		2. nodejs and yarn
	-. setup the frontend:
		- install frontend requirements:
			- `yarn install`
		- run the server:
			- `yarn start`

### Docker deployment:
	- requirements:
		1. install docker deamon [docs](https://docs.docker.com/install/).
		2. install docker-compose tool [docs](https://docs.docker.com/compose/install/).
	1. build the frontend image:
		- dev: `sudo docker build -t madina-tic/frontend:0.1 . -f Dockerfile.dev`
		- prod: `sudo docker build -t madina-tic/frontend:0.2 .`
	2. run the container:
		- dev: `sudo docker run -it -p 3000:3000 madina-tic/frontend:0.1`
		- prod: `sudo docker run -d -p 5000:5000 madina-tic/frontend:0.2`
		
<img src="https://user-images.githubusercontent.com/47861021/166608508-7e4f90bd-0126-4661-8f36-eff99015aa4a.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608502-d701fafb-06e4-4a82-aaa2-888adf33c02b.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608499-b2c9cdb8-115c-4bdc-9736-4fca48f0a575.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608478-8b46ab53-a0a9-4dcd-98df-46c104084efa.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608480-f38b426f-a145-4d37-b9fb-d6aa1183f879.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608481-9e6081b3-6529-4557-9064-2caa8a4f1918.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608482-803d87b7-3dc6-4401-809d-774024afbf1e.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608485-c70798eb-5970-4484-b33f-2b04ba870863.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608488-bff7a8cb-0136-461c-b244-97d6183a485f.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608501-a79f7f89-9145-4e70-95aa-93d460cc7648.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608491-56b576cc-4997-424a-a6b0-2cc0bbec0636.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608492-1db16547-bed7-4c2c-8469-2717cf5eb8c0.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608495-0c996422-0d63-4506-8046-fda62f8dbe20.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608496-dda68189-ed8d-4f57-a04e-d001808ba7f1.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608498-6c4c50e5-40f7-4623-9b17-ae89a6933549.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608503-0d7d0969-6028-4a5c-b4c3-fe3878d3b387.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608509-965a31fd-4791-49f6-ac8b-ad21d0b9ce87.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608511-6d5c667b-7b76-464e-afc7-6c508e2c7d62.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608512-c012ed9e-25da-4b88-95c6-b5f0631786b0.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608513-5a6ceb44-9322-40b2-9ea1-d095c846d78d.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608514-89affbb5-6d0e-4cf0-b0ba-b6ad4bd66ea7.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608517-1224bd4c-e274-4e5f-a521-c86f973e7d18.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/47861021/166608518-40af4783-4ed5-4fec-b511-054018dd049b.png" width="30%"></img> 
