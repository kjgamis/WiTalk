# WiTalk

WiTalk is more than an app; it's a digital bridge fostering connections and empowering Canadian newcomers through language access. As part of our mission to create an inclusive community, WiTalk allows both newcomers and interpreters to sign up for distinct accounts, creating a platform where language is no longer a barrier but a bridge to opportunity.

Newcomers can seamlessly request and connect with skilled interpreters, ensuring clear communication in essential services such as medical appointments, immigration processes, and community interactions. With a user-friendly interface, WiTalk caters to individuals at all skill levels, creating a space where everyone can actively participate and contribute meaningfully.

In our commitment to building stronger, more connected communities, WiTalk envisions a future where language barriers are overcome, fostering understanding and inclusivity. Join us on this journey as we connect, bridge, and empower lives through the transformative power of language.


## Tech Stack
HTML, CSS, Javascript, Node.js, MongoDB Atlas, Google Cloud Platform

## Inspiration
In our commitment to fostering inclusivity and easing the transition for newcomers to Canada, our team was inspired by the challenges faced by individuals navigating a new environment with a different language and culture. Recognizing the crucial role of interpreters in bridging communication gaps, we aimed to create a solution that would streamline the connection process between newcomers and skilled interpreters. The idea emerged from a desire to make essential services, such as medical appointments, immigration processes, and community interactions, more accessible to those who may face language barriers. The app serves as a digital platform, leveraging technology to match newcomers with interpreters who specialize in their specific needs, ensuring a smoother integration process. By embracing innovation, our team aspires to contribute to a more inclusive and supportive Canadian community for everyone, regardless of their linguistic background.

## API

The following routes are available:
```
GET /api/interpreters
POST /api/interpreters
GET /api/interpreters/:id
PUT /api/interpreters/:id
DELETE /api/interpreters/:id
```


## Running locally

### API

#### Setup

Download dependencies

```
cd server/
npm i
```

Create `.env` file

```env
MONGO_URI=
"mongodb+srv://witalk:[PASS]@witalk.vd4pt6y.mongodb.net/?retryWrites=true&w=majority"
```

#### Run local server

```
npm run start:dev
```


## Deployment
Google Cloud App Engine is used for both backend (API service) and frontend website hosting.

### Steps

1. make sure you are authenticated to the appropriate Google account 

2. Enter the appropriate directory:

```
cd src // for frontend
cd server // for backend
```

3. Enter deploy script

```
gcloud app deploy
```

## What's next for WiTalk
Integrate a frontend framework like React to leverage built-in features such as routing and state management, streamlining the development process with functionalities that may be challenging to configure manually. Fortunately, implementing a frontend framework like React is feasible for us, given that our API is accessible irrespective of the frontend.

Enhance API security by implementing authentication headers. This additional layer of protection will safeguard against unauthorized access and potential security breaches, ensuring a more secure and resilient API.

Develop robust authentication and authorization mechanisms, prioritizing the secure and safe storage of user data to fortify

### Contributors
- [Kage Gamis](https://linkedin.com/in/kjgamis)
- [Lejla S](https://linkedin.com/in/lejla-S)
- [Santhosh Bhoopal](https://www.linkedin.com/in/santhosh-bhoopal-446203165)
- [Mark De Guzman](https://linkedin.com/in/mark-deguzman)

### Resources

- [Express & MongoDB](https://medium.com/@ahmad.moussa/build-a-node-js-express-rest-api-with-mongodb-atlas-cloud-service-68711950ca43)

#### GCP
- [Hosting on App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website)
- [Deploy Node service to App Engine](https://cloud.google.com/nodejs/getting-started)
  - [Deploy Sample](https://billmartin.io/blog/how-to-build-and-deploy-a-nodejs-api-on-google-cloud)
- [storing secrets](https://tsmx.net/integrating-gcp-secret-manager-with-app-engine-environment-variables/#referencing-secrets)
