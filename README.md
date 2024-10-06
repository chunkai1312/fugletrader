# FugleTrader

> FugleTrader is a command-line interface (CLI) tool designed to seamlessly interact with the Fugle API, enabling streamlined stock trading and real-time data integration.

## Prerequisites

- Apply for the [Fugle API](https://developer.fugle.tw/)
- Set up a [Docker](https://www.docker.com/) environment
- (Optional) Apply for a [LINE Notify](https://notify-bot.line.me/) access token
- (Optional) Apply for an [ngrok](https://ngrok.com/) authtoken

## Installation

First, to launch the FugleTrader API server, download the Docker image:

```bash
docker pull chunkai1312/fugletrader-api:latest
```

Then, download the Docker image for the CLI used to interact with the API server:

```bash
docker pull chunkai1312/fugletrader-api:latest
```

Alternatively, if you have a Node.js environment, you can install the CLI via npm:

```bash
npm install -g fugletrader-cli
```

## Quick Start

The quickest way to get started is by using `docker-compose`:

```yml
version: "3"

services:
  api:
    image: chunkai1312/fugletrader-api:latest
    ports:
      - "3000:3000"
    environment:
      - FUGLE_TRADE_API_URL=${FUGLE_TRADE_API_URL}
      - FUGLE_TRADE_API_KEY=${FUGLE_TRADE_API_KEY}
      - FUGLE_TRADE_API_SECRET=${FUGLE_TRADE_API_SECRET}
      - FUGLE_TRADE_AID=${FUGLE_TRADE_AID}
      - FUGLE_TRADE_PASSWORD=${FUGLE_TRADE_PASSWORD}
      - FUGLE_TRADE_CERT_PATH=${FUGLE_TRADE_CERT_PATH}
      - FUGLE_TRADE_CERT_PASS=${FUGLE_TRADE_CERT_PASS}
      - LINE_NOTIFY_ENABLED=${LINE_NOTIFY_ENABLED}
      - LINE_NOTIFY_ACCESS_TOKEN=${LINE_NOTIFY_ACCESS_TOKEN}
      - NGROK_ENABLED=${NGROK_ENABLED}
      - NGROK_AUTHTOKEN=${NGROK_AUTHTOKEN}
    volumes:
      - ./certs:/app/certs
    restart: always

  cli:
    image: chunkai1312/fugletrader-cli:latest
    stdin_open: true
    tty: true
    environment:
      - FUGLETRADER_API_URL=${FUGLETRADER_API_URL}

volumes:
  certs:
```

The environment variables are defined as follows:

- `FUGLE_TRADE_CERT_PATH`: Your trading certificate path.
- `FUGLE_TRADE_API_URL`: The Fugle Trade API URL.
- `FUGLE_TRADE_API_KEY`: Your Fugle Trade API key.
- `FUGLE_TRADE_API_SECRET`: Your Fugle Trade API secret.
- `FUGLE_TRADE_AID`: Your brokerage account ID.
- `FUGLE_TRADE_PASSWORD`: Your brokerage account password.
- `FUGLE_TRADE_CERT_PASS`: Your trading certificate password.
- `FUGLE_MARKETDATA_API_KEY`: Your Fugle MarketData API secret.
- `LINE_NOTIFY_ENABLED`: (Optional) Enable LINE Notify notifications.
- `LINE_NOTIFY_ACCESS_TOKEN`: (Optional) Your LINE Notify access token.
- `NGROK_ENABLED`: (Optional) Enable ngrok tunneling.
- `NGROK_AUTHTOKEN`: (Optional) Your ngrok auth token.
- `FUGLETRADER_API_URL`: The FugleTrader API URL for the CLI to use.

To start the FugleTrader API server, run:

```bash
docker compose up api
```

Once the FugleTrader API server is up and running, you can interact with it using the CLI:

```bash
docker compose run --rm cli --help
```

Or, if you’ve installed the CLI globally via npm:

```bash
fugletrader --help
```

To set the `FUGLETRADER_API_URL`, you can run:

```bash
fugletrader config set FUGLETRADER_API_URL=<YOUR_FUGLETRADER_API_URL>
```

## Changelog

[Changelog](./CHANGELOG.md)

## License

[MIT](LICENSE)
