---
sidebar_position: 1
---

# 安裝說明

在使用 FugleTrader 之前，請按照以下步驟完成安裝。

## 下載 FugleTrader API 映像檔

首先，您需要透過 Docker 下載 FugleTrader API 伺服器的映像檔：

```bash
docker pull chunkai1312/fugletrader-api:latest
```

## 安裝 FugleTrader CLI 客戶端

接下來，您可以選擇以下任一方式來安裝與 API 互動的 CLI 工具：

### 方式一：透過 Docker 安裝 CLI

```bash
docker pull chunkai1312/fugletrader-api:latest
```

### 方式二：透過 npm 安裝 CLI（推薦）

如果您的系統已安裝 [Node.js](https://nodejs.org)，可使用 `npm` 指令來安裝 CLI：

```bash
npm install -g fugletrader-cli
```

完成安裝後，您即可使用 FugleTrader 進行即時股票交易及資料管理。
