const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');
const technologies = {
    "react": `<span class="label-container" style="background-color: #73c7de"><i class="fab fa-react"></i> ReactJS</span>`,
    "reactnative": `<span class="label-container" style="background-color: #73c7de"><i class="fab fa-react"></i> React Native</span>`,
    "node": `<span class="label-container" style="background-color: #7fba87"><i class="fab fa-node-js"></i> NodeJS</span>`,
    "next": `<span class="label-container" style="background-color: #737373"><i class="fab fa-js"></i> NextJS</span>`,
    "express": `<span class="label-container" style="background-color: #c2b767"><i class="fab fa-js"></i> ExpressJS</span>`,
    "docker": `<span class="label-container" style="background-color: #3b608a"><i class="fab fa-docker"></i> Docker-Compose</span>`,
    "tailwind": `<span class="label-container" style="background-color: #2e4761"><i class="fas fa-wind"></i> Tailwind CSS</span>`,
    "dataforge": `<span class="label-container" style="background-color: #68a393"><i class="fas fa-magnifying-glass-chart"></i> DataForge</span>`,
    "nivo": `<span class="label-container" style="background-color: #ff7a7a"><i class="fas fa-chart-simple"></i> Nivo Lib</span>`,
    "mysql": `<span class="label-container" style="background-color: #d6b372"><i class="fas fa-database"></i> MySQL</span>`,
    "figma": `<span class="label-container" style="background: linear-gradient(to right, #fc7265, #b482f9, #82e4ba)"><i class="fab fa-figma"></i> Figma</span>`,
    
    "kaggle": `<span class="label-container" style="background-color: #73c7de"><i class="fab fa-kaggle"></i> Kaggle</span>`,
    "python": `<span class="label-container" style="background-color: #3b608a"><i class="fab fa-python"></i> Python</span>`,
    "pandas": `<span class="label-container" style="background-color: #737373"><i class="fab fa-python"></i> Pandas</span>`,
    "aws": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon Web Services</span>`,
    "sqlserver": `<span class="label-container" style="background-color: #ff7a7a"><i class="fas fa-database"></i> SQL Server</span>`,
    "powerbi": `<span class="label-container" style="background-color: #cccc9b"><i class="fas fa-chart-simple"></i> Power BI</span>`,
    "githubactions": `<span class="label-container" style="background-color: #2e4761"><i class="fab fa-github"></i> GitHub Actions</span>`,
    "cypress": `<span class="label-container" style="background-color: #68a393"><i class="fas fa-check"></i> Cypress Testing</span>`,
    "jest": `<span class="label-container" style="background-color: #ff7a7a"><i class="fas fa-crown"></i> Jest Testing</span>`,

    "cognito": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon Cognito</span>`,
    "translate": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon Translate</span>`,
    "rekognition": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon Rekognition</span>`,
    "lex": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon Lex</span>`,
    "rds": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon RDS</span>`,
    "s3": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon S3</span>`,
    "ec2": `<span class="label-container" style="background-color: #d6b372"><i class="fab fa-aws"></i> Amazon EC2</span>`,

    "springboot": `<span class="label-container" style="background-color: #7fba87"><i class="fas fa-leaf"></i> Springboot Framework</span>`,
    "java": `<span class="label-container" style="background-color: #ff7a7a"><i class="fab fa-java"></i> Java</span>`,
    "gcp": `<span class="label-container" style="background-color: #2e4761"><i class="fas fa-cloud"></i> Google Cloud Platform</span>`,
    "gcpvision": `<span class="label-container" style="background-color: #737373"><i class="fas fa-cloud"></i> Cloud Vision</span>`,
}
class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const example = new Carousel(galleryContainer, galleryItems, galleryControls);
example.setControls();
example.useControls();

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".carousel-buttons button");
    const galleryItems = document.querySelectorAll(".gallery-item");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const projectNumber = this.getAttribute("data-project");

            galleryItems.forEach((item, index) => {
                item.src = `images/project_0${projectNumber}/image_0${index + 1}.png`;
            });
        });
    });
});

function toggleActive(button) {
    const buttons = document.querySelectorAll('.project-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const descriptions = {
        1: `Analizado, diseñado e implementado para una institución que busca generar indicadores de rendimiento académico de calidad, con grandes cantidades de datos de estudiantes universitarios de la USAC a nivel nacional, con +20 centros regionales y 53 Unidades académicas, teniendo en cuenta +3400 carreras. Desarrollado con
        ${technologies["react"]},
        ${technologies["node"]},
        ${technologies["tailwind"]},
        ${technologies["next"]},
        ${technologies["express"]},
        ${technologies["dataforge"]},
        ${technologies["nivo"]},
        ${technologies["mysql"]},
        en conjunto con despliegue de contenedores en la nube utilizando ${technologies["docker"]},
        empleando la herramienta ${technologies["figma"]} para el desarrollo de Mockups y proveer una aprobación tanto de funcionalidad como de diseño para un posterior desarrollo, cumpliendo con los requerimientos del cliente.`,
        
        2: `Utilizando fuentes de datos de
        ${technologies["kaggle"]}, procesados con
        ${technologies["python"]} y la librería
        ${technologies["pandas"]} obteniendo un proceso de ETL. Almacenando los resultados en una base de datos en 
        ${technologies["aws"]} con
        ${technologies["sqlserver"]}, estos mismos siendo cargados a
        ${technologies["powerbi"]} para un análisis concreto y objetivo de datos, a través de varios dashboards diseñados para mostrar distintos temas solicitados.`,
        
        3: `Diseñada al estilo de Uber Eats, cuenta con distintos roles enfocados a un servicio de entrega de comida rápida, donde los administradores reciben solicitudes de nuevos repartidores para laborar, también clientes que realizan pedidos con un carrito de compras para hacer una experiencia fluida, recibiendo los pedidos los roles de restaurantes para seleccionar un repartidor cercano al mismo y entrega de estados del proceso del cada pedido a sus debidos clientes. Desarrollé el apartado de backend y base de datos del mismo con
        ${technologies["node"]},
        ${technologies["express"]} y
        ${technologies["mysql"]} con despliegue de contenedores en
        ${technologies["aws"]} con
        ${technologies["docker"]}, (IAM, EC2, RDS y S3), además de CI/CD utilizando
        ${technologies["githubactions"]} e implementando el framework
        ${technologies["jest"]}.`,

        4: `Enfocado en la implementación de una amplia variedad de servicios para hacer que el usuario tenga multiples opciones de utilizar la plataforma. En este proyecto implementé servicios de backend y base de datos, mencionando algunas funcionalidades técnicas que posee y la tecnología utilizada: Registro y autenticación de usuarios con
        ${technologies["cognito"]}, traducción de publicaciones y comentarios de usuarios con
        ${technologies["translate"]}, registro e inicio de sesión mediante reconocimiento facial con
        ${technologies["rekognition"]}, ChatBot para los usuarios utilizando
        ${technologies["lex"]}, almacenamiento de datos mediante
        ${technologies["rds"]} y archivos e imágenes almacenadas con
        ${technologies["s3"]}, mientras el proyecto es alojado en una
        ${technologies["ec2"]}.`,
        
        5: `Su objetivo es la implementación de un sistema que reconozca imágenes y determinar si son aptas o no para un público general, dando como resultado la sensura de las mismas según sea el resultado y mostrando los temas relacionados a la imagen como también la cantidad de rostros detectados. Esto utilizando
        ${technologies["react"]},
        ${technologies["springboot"]} y
        ${technologies["java"]}, enviando los datos de la imagen al servicio de
        ${technologies["gcp"]},
        ${technologies["gcpvision"]}, mostrando los resultados en una interfaz intuitiva y objetiva.`,

        6: `Realizado para proveer música en streaming, posee diferentes roles donde el administrador crea usuarios para los artistas, estos últimos tienen la posibilidad de subir sus sencillos o albumes, para que posteriormente el usuario pueda escucharlas según desea. Desarrollé parte del frontend de la aplicación, parte del backend como también consultas para la base de datos, todo esto con
        ${technologies["reactnative"]},
        ${technologies["node"]},
        ${technologies["express"]} y
        ${technologies["mysql"]} con despliegue de contenedores con
        ${technologies["docker"]}, almacenamiento de datos mediante
        ${technologies["rds"]} y archivos e imágenes almacenadas con
        ${technologies["s3"]}, mientras el proyecto es alojado en una
        ${technologies["ec2"]} e implementando el framework
        ${technologies["cypress"]}.`
    };

    const projectNumber = button.getAttribute('data-project');
    const descriptionElement = document.getElementById('description');

    if (descriptions[projectNumber]) {
        descriptionElement.innerHTML  = descriptions[projectNumber];
    }
}
