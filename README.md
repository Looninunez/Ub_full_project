Ub - Full project skeleton (Passenger Flutter app, Driver Flutter app, Admin React app, Backend Express)
This package is a starting point. Replace placeholders and follow steps in each README to run locally and deploy.

Key steps:
- Backend: cd backend && cp .env.example .env && npm install && npm run dev
- Passenger app (Flutter): cd ub_passenger && flutter pub get && flutter run -d chrome
- Admin: cd ub_admin && npm install && npm run dev
- Firebase hosting: configure project ub-project and deploy passenger web build to hosting (firebase.json provided)
- Render: push repo and create Web Service for backend, set MONGO_URI and GOOGLE_APPLICATION_CREDENTIALS as secrets.
