☕ Brewphoria

A full-stack coffee & chocolate brand e-commerce application featuring a customer storefront, a separate admin dashboard, and a REST API backend for products, orders, users, and cart management. Built on the MERN stack.

Live Demo: Frontend · Admin


✨ Features


Customer storefront with product browsing, cart, and checkout
Separate admin dashboard for product and order management
User authentication and authorization
Order management with async notifications
Dedicated Playwright test suite for API testing (separate repo)



🛠️ Tech Stack

Frontend


React
Vite


Backend


Node.js
Express.js


Database


MongoDB (MongoDB Atlas)


Cloud & Infrastructure


AWS EC2 — application hosting
Nginx — reverse proxy / web server
PM2 — Node.js process manager
AWS SQS + Lambda — asynchronous order notification pipeline
Vercel — frontend, admin, and backend hosting (current production deployment)


CI/CD


GitHub Actions — automated deployment pipeline to EC2


Testing


Playwright — API testing (see separate repo on profile)



🚀 Deployment

Brewphoria has been deployed across two environments:

Vercel (Current Live Deployment)


Frontend: brewphoria-frontend.vercel.app
Admin: brewphoria-admin.vercel.app
Backend: brewphoria-backend.vercel.app


Vercel handles zero-config builds and deployments directly from the main branch, serving as the primary demo environment.

AWS (Production-Grade Infrastructure)

As a learning and portfolio exercise in cloud infrastructure, the backend has also been deployed using a more traditional cloud setup:


EC2 instance runs the Node/Express API behind Nginx as a reverse proxy
PM2 keeps the Node process alive, auto-restarting on crashes or reboots
MongoDB Atlas serves as the managed database layer
SQS + Lambda decouples order processing — placing an order pushes a message to an SQS queue, which triggers a Lambda function to handle async order notifications
GitHub Actions automates deployment: pushes to main trigger a workflow that builds and deploys the latest code to the EC2 instance


This dual setup demonstrates both rapid PaaS deployment (Vercel) and hands-on IaaS/cloud-native architecture (AWS).


📁 Project Structure

Brewphoria/
├── .github/workflows/   # GitHub Actions CI/CD (EC2 deployment)
├── Admin/               # Admin dashboard (React + Vite)
├── Backend/             # Node/Express REST API
├── Frontend/            # Customer storefront (React + Vite)
└── README.md


🧪 Testing

A dedicated Playwright project covering API testing (CRUD, negative cases, schema validation, and response-time assertions) is maintained as a separate repository — linked on the author's GitHub profile.


📌 Getting Started

bash# Clone the repo
git clone https://github.com/UsmmmanT/Brewphoria.git

# Install dependencies (run in each of Backend/, Frontend/, Admin/)
npm install

# Set up environment variables (.env) for MongoDB URI, JWT secret, AWS credentials, etc.

# Run locally
npm run dev


👤 Author

Usman Tanveer


GitHub: @UsmmmanT
LinkedIn: UsmanTanveer4478
