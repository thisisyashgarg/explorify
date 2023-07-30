# Explorify Website Generation Script

This is a Node.js script that fetches data from an API, generates multiple HTML pages using Eta templates, and saves them to the `./dist/` directory. The script also includes an HTML template with placeholders that will be filled with the fetched data. Below are the steps to run this script locally on any machine.

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.

### Step 1: Clone the Repository

Clone the repository containing the script and related files from GitHub:

```bash
git clone https://github.com/thisisyashgarg/explorify.git
```

### Step 2: Install Dependencies

Navigate to the project directory and install the required dependencies using npm:

```bash
cd explorify
npm install
```

### Step 3: Create .env File

Create a `.env` file in the root of the project and set the environment variable `API_URL` with the URL of the API from which the data will be fetched. For example:

```env
API_URL=https://api.example.com/data
```

### Step 4: Customize Template (Optional)

If you want to customize the HTML template, you can modify the `index.html` file located in the project directory. The template uses Eta templating syntax with placeholders like `<%= it.key %>` and `<%= it.activity %>`. These placeholders will be replaced with the actual data fetched from the API.

### Step 5: Generate Pages

Run the script to generate HTML pages using the following command:

```bash
node index.js
```

The script will fetch data from the API, populate the template with the data, and save multiple HTML files in the `./dist/` directory. The number of generated pages is determined by the `PAGE_COUNT` constant defined in the script.

### Step 6: Open the Generated Pages

Once the script has finished running, you can open the generated HTML pages in your web browser. The files will be located in the `./dist/` directory with filenames like `1.html`, `2.html`, and so on.

That's it! You have successfully run the Explorify website generation script locally on your machine.
