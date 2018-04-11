t are Microservices?
The term “microservices” refers to a software architecture approach that enables greater agility by breaking applications down into smaller components. These components are autonomous and typically aligned with a particular business or objective. The large, monolithic codebases that traditionally power enterprise applications make it difficult to move quickly. The monolithic approach also presents organizational alignment problems. By using the microservices approach, a large company can launch new products and services faster and align development teams with business objectives.

Characteristics of Microservices
Microservices are characterized by modular, autonomous services.

Modular Applications
In a microservices architecture, applications are broken down into small, independent services. Services are typically focused on a specific, discrete objective or function and decoupled along business boundaries. Separating services by business boundaries allows teams to focus on the right goals and also ensures autonomy between services. Each service is developed, tested, and deployed independently, and services are usually separated as independent processes or software containers that communicate over a network via agreed APIs, although in some cases that network may be local to the machine. Multiple instances of the same microservice are typically deployed, providing redundancy and scalability.

Alignment to Business Objectives
When decomposing an application's architecture into microservices, the best practice is to align them with organizational boundaries. That alignment enables the team which is responsible for a function within the business to own the creation and management of the associated microservices – allowing them to work relatively independently and apply their business knowledge. Similarly, communication between microservices would align with inter-organizational communication paths.

Database per Service
Best practice is for each service to connect to its own database. The reasons are:

In a shared database environment, a catastrophic failure with the database infrastructure has the potential to affect multiple microservices and result in a substantial outage. Isolating database instances also isolates failure scenarios.

The development and operations team for a particular microservice can safely make changes to their database contents and configuration without risk of impacting other microservices.

Thus, it is recommended to decouple any shared databases so that each microservice has its own.

In cases where you need to share information between services, you should do that explicitly – when the data changes in one service, it should notify the other service so that it may update its database. You would typically use a messaging system such as Apache Kafka for this.

Benefits of Microservices
The microservices approach conveys many advantages, including a faster time to market, flexibility, resiliency, organizational alignment, and lower cost.

Faster Time To Market
Implementing a microservices architecture can enable organizations to get their applications to market faster. Changes to a monolithic application, even if small, require redeploying the whole application stack, introducing risk and complexity. In contrast, updates to a service can be committed, tested, and deployed immediately and changes to an individual service will not impact the rest of the system.

Flexibility and Scalability
The microservices approach also provides flexibility when scaling an application. Monolithic applications require that the entire system (and all of its features) scales simultaneously. With microservices, only the components or features that require extra performance need to be scaled. Services can be scaled by deploying more microservice instances, which enables more effective capacity planning and lower software licensing costs, thus lowering overall TCO.

Resiliency
With monolithic applications, the failure of a component can compromise the whole application. In microservices, each service is isolated to prevent cascading failures from bringing down the entire system. If all instances of an individual microservice failed, the overall service might degrade, but the other components could still provide valuable services.

Organizational Alignment
Microservices enable technical groups to align to the organizational needs, and teams can be sized to match the required tasks. Typically microservices teams are smaller, cross-disciplinary (Ops, Dev, QA), and focused on a single component of the overall application. By providing ownership over individual services, rather than functional areas, microservices also serve to break down the silos between teams and improve collaboration. This approach is especially powerful for distributed and remote teams. (For example, teams in different locations can release and deploy features independently.)

Reduction in Cost
Microservices lower costs by improving hardware utilization and making development teams more efficient. Through the use of containers, applications and environments (design, test, staging, production, support) gain efficiencies while sharing the same infrastructure. For development teams, microservices reduce technical debt, by minimizing high-risk code refactoring. In a monolithic app, there is a significant time and resource cost associated with maintaining a large codebase. In contrast, by breaking the the application into API-accessible microservices, individual services can be managed independently and you can spend less time on maintaining and updating code.

Comparing Monolithic and Microservices Architectures
The table below summarizes some of the key differences between different architectural approaches.

Monolith	Microservices
Application architecture	Single unit	Modular
Development Methodology	Waterfall	Agile
Team organization	Functional expertise (e.g., UI, DBA, middleware)	Business unit
Change management	Full redeploy	Redeploy individual microservices
Data management	Centralized	Decentralized
Technologies that Enable Microservices
The emergence of technologies such as containers (Docker, LXC) and orchestration frameworks (Kubernetes, Mesos) mitigate many of the problems that prevented using microservice architectures in the past.

Containers
Containers are lightweight run-time environments that provide isolation and scalability with minimal impact to performance and capacity. Packaging is simplified because the same environment can simultaneously host development, support, test, and production versions of the application, so that going from dev to test to QA to production is easier. Containers work very well in a microservices environment as they isolate services to an individual container. Updating a service becomes a simple process to automate and manage, and changing one service will not impact other services, provided that you maintain APIs.

Docker
Docker is the most popular container technology in use today. Its simplicity and rich ecosystem makes it incredibly powerful and easy to use.

Docker containers are created from images which have been designed to provide a particular capability – whether that be, for example, just a base operating system, a web server, or a database. Docker images are constructed from layered filesystems so they can share common files, reducing disk usage and speeding up image download. This makes them much more efficient than virtual machines. Docker Hub provides thousands of official and community images, which can be extended or used as is, to quickly create a container that's running the software you want to use. All it takes to get MongoDB up and running is the command docker run --name my-mongodb -d mongo. Proprietary images can be made available within the enterprise using a local, private registry rather than Docker Hub.

Orchestration
When organizations start running containers at scale, many look to orchestration frameworks to help manage the increased complexity. Orchestration frameworks help deploy and manage containers, provision hosts, instantiate containers, handle failures, and provide automated scaling.
