# DiagramAI Server

A powerful AI-driven API service that converts natural language descriptions into beautiful Mermaid.js diagrams using Google's Gemini AI.

## 🚀 Features

- **Natural Language Processing**: Convert plain text descriptions into professional diagrams
- **Multiple Diagram Types**: Support for flowcharts, sequence diagrams, class diagrams, state diagrams, Gantt charts, and ER diagrams
- **AI-Powered**: Leverages Google Gemini 2.5 Flash for intelligent diagram generation
- **RESTful API**: Simple and intuitive API endpoints
- **TypeScript**: Full TypeScript support for better development experience
- **Production Ready**: Built with security, logging, and CORS support

## 📋 Supported Diagram Types

- **Flowcharts** - Process flows and workflows
- **Sequence Diagrams** - System interactions and communications
- **Class Diagrams** - Object-oriented models and structures
- **State Diagrams** - State transitions and workflows
- **Gantt Charts** - Project timelines and schedules
- **ER Diagrams** - Database relationships and entities

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **AI Provider**: Google Gemini (via LangChain)
- **Package Manager**: pnpm
- **Security**: Helmet.js, CORS
- **Logging**: Morgan
- **Environment**: dotenv

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm
- Google Gemini API key

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/brijeshdevio/DiagramAIAPI.git
   cd DiagramAIAPI
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Configuration**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:

   ```env
   PORT=3000
   NODE_ENV=development
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```

## 🌐 API Endpoints

### Generate Diagram

**POST** `/api/diagram`

Generate a Mermaid.js diagram from natural language description.

#### Request Body

```json
{
  "prompt": "Show a user login flow with authentication and error handling"
}
```

#### Response

```json
{
  "response": "flowchart TD\n    User([User]) --> Login[Enter Credentials]\n    Login --> Validate{Valid Credentials?}\n    Validate -->|Yes| Dashboard[Access Dashboard]\n    Validate -->|No| Error[Show Error Message]\n    Error --> Login",
  "prompt": "Show a user login flow with authentication and error handling"
}
```

### Health Check

**GET** `/`

Returns API status and welcome message.

#### Response

```json
{
  "message": "Welcome to the DiagramAI API"
}
```

## 💡 Usage Examples

### Simple Process Flow

```bash
curl -X POST http://localhost:3000/api/diagram \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Create a diagram showing how a user orders food online"
  }'
```

### Database Design

```bash
curl -X POST http://localhost:3000/api/diagram \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Design a database schema for a blog with users, posts, and comments"
  }'
```

### System Architecture

```bash
curl -X POST http://localhost:3000/api/diagram \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Show the interaction between frontend, API, and database in a web application"
  }'
```

## ⚙️ Configuration

### Environment Variables

| Variable         | Description             | Required | Default         |
| ---------------- | ----------------------- | -------- | --------------- |
| `PORT`           | Server port             | No       | 3000            |
| `NODE_ENV`       | Environment mode        | No       | development     |
| `GEMINI_API_KEY` | Google Gemini API key   | Yes      | -               |
| `SYSTEM_PROMPT`  | Custom AI system prompt | No       | Built-in prompt |

### Custom System Prompt

You can customize the AI behavior by setting the `SYSTEM_PROMPT` environment variable. The default prompt is optimized for generating clean, valid Mermaid.js diagrams.

## 🔒 Security Features

- **Helmet.js**: Security headers for HTTP responses
- **CORS**: Cross-origin resource sharing configuration
- **Environment Variables**: Sensitive data protection
- **Input Validation**: Request body validation and sanitization

## 🚀 Deployment

### Production Build

```bash
pnpm build
NODE_ENV=production pnpm start
```

### Docker (Optional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server
- `pnpm test` - Run tests (placeholder)

### Code Style

The project uses TypeScript with strict type checking. Follow these guidelines:

- Use TypeScript interfaces for type definitions
- Implement proper error handling
- Follow REST API conventions
- Use meaningful variable and function names

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Brijesh** - [brijeshio@duck.com](mailto:brijeshio@duck.com)

## 🔗 Related Projects

- [Mermaid.js](https://mermaid-js.github.io/mermaid/) - Diagram syntax and rendering
- [LangChain](https://langchain.com/) - AI framework for LLM integration
- [Google Gemini](https://ai.google.dev/) - AI model provider

---

**Happy Diagramming!** 🎨✨
