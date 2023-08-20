# Notion-Pokemon-API Integration
This Node.js script fetches Pokémon information from PokeAPI and sends it to a Notion page using the Notion API.

## Prerequisites
Before getting started, ensure you have the following:

- Node.js installed on your system.
- A Notion account.
- An integration set up in your Notion workspace to obtain the Notion API token.
- Basic understanding of APIs and Node.js.

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/notion-pokemon-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd notion-pokemon-api
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the project directory and add your Notion API token to it:

    ```bash
    NOTION_API_TOKEN=your_notion_api_token
    NOTION_DATABASE_ID=your_notion_database_id
    ```

5. Run the script:

    ```bash
    npm start
    ```

The script will fetch Pokémon information from PokeAPI and send it to your specified Notion page.

## Creating Notion Integration, Obtaining API Key, and Finding Database ID

1. Create a Notion Integration
    To interact with the Notion API, you need to create an integration in your Notion workspace. Follow these steps:

    1. Log in to your Notion account.

    2. Go to the Notion API Integrations page.

    3. Click on the "Create New Integration" button.

    4. Provide a name for your integration and a brief description.

    5. Click the "Submit" button.

    Once your integration is created, you will receive an Integration Name and an Internal Integration Token. Keep this token secure, as it will be used as your API key.

2. Obtain the Notion API Key
    The Internal Integration Token you obtained in the previous step will serve as your Notion API key. In your project, you will use this key to authenticate your requests to the Notion API.

3. Find the Database ID
    For your script to send Pokémon information to a Notion page, you need to identify the target Notion database. Here's how you can find the database ID:

    1. Open the Notion page where you want to store the Pokémon information.

    2. Click on the "Share" button at the top right corner of the page.

    3. In the "Invite to Page" section, copy the URL of the page. It should look something like this: `https://www.notion.so/Your-Workspace-Name/Your-Page-Title-0123456789abcdef0123456789abcdef`

    4. The last part of the URL, after the last slash (/), is the database ID. In the example URL above, the database ID is `0123456789abcdef0123456789abcdef`.

## References

- [Notion API Reference](https://developers.notion.com/reference/intro)
- [PokeAPI](https://pokeapi.co/)