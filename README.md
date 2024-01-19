# Point of Sale API using Express.js

## Overview

This is a RESTful API built with Express.js for managing Point of Sale (POS) operations. It provides endpoints for handling products, sales, and inventory management in a retail environment.

## Table of Contents

- [Point of Sale API using Express.js](#point-of-sale-api-using-expressjs)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Getting Started

### Prerequisites

- Node.js (v14.17.0 or higher)
- npm (v6.14.13 or higher)
- MySQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adityabm/pos-api.git
   ```

2. Install dependencies:

   ```bash
   cd pos-api
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and provide the necessary configuration. You can use the provided `.env.example` as a template.

   ```env
   PORT=3000
   DATABASE_URL="mysql://root:@localhost:3306/pos"
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The API will be available at `http://localhost:3000`.
