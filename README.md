🎬 LEO_Shows: Movie Ticketing SystemLEO_Shows is a high-performance, full-stack movie ticket booking platform built with the MERN Stack. Inspired by industry leaders like BookMyShow, this system handles complex logic such as concurrent seat locking, real-time UI updates, and location-based show grouping.

🚀 Key FeaturesTheatre & Show Management: Comprehensive dashboard for managing movie listings and showtimes.Dynamic Seat Layouts: Interactive seat selection with real-time status updates.Concurrency Handling: Advanced logic to prevent double-booking of the same seat.Smart Grouping: Showtimes are intelligently grouped by location and theatre for a better user experience.Role-Based Access: Secure authentication for both Admins (theatre/show management) and Customers (booking/history).Payment Simulation: Integrated flow for handling successful bookings and digital receipts.

🛠️ Tech StackLayerTechnologyFrontendReact.js, Tailwind CSS, Redux ToolkitBackendNode.js, Express.js, TypeScriptDatabaseMongoDB with MongooseArchitectureClean Service-Controller-Route pattern

📂 Project Architecture: The project follows a modular structure to ensure scalability and ease of maintenance. You can view the logic flow and folder structure here:🔗 System Flowchart

⚙️ Getting Started
Clone the repo: https://github.com/bhavya654/LEO_Shows-Ticketing-System.git
Install dependencies:
For the backend: cd backend && npm install
For the frontend: cd frontend && npm install
Setup Environment Variables: Create a .env file in the backend directory with your MONGO_URI and JWT_SECRET.
Run the project:npm run dev
