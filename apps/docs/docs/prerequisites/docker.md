---
sidebar_position: 2
---

# 建立 Docker 環境

FugleTrader 是基於 [Docker](https://www.docker.com/) 運行的應用程式，透過容器化技術將應用程式及其相依套件打包在輕量容器中，確保其能夠在本地、測試及生產等多種環境中穩定運行。

![Docker](./img/docker.png)

## 安裝 Docker Engine

[Docker Engine](https://docs.docker.com/engine/) 是 Docker 的核心，負責建立和管理容器。要在 Linux、Windows 或 macOS 上安裝 Docker Engine，請依照下列步驟操作：

1. 前往 [Docker](https://docs.docker.com/engine/install/) 官方網站下載適合您作業系統的 Docker 安裝檔。
2. 根據您所使用的作業系統，依照相應的安裝指引進行安裝：
  - 在 Linux 上，您可以使用 apt 或 yum 等套件管理工具來安裝 Docker。
  - 在 Windows 和 macOS 上，下載並安裝 Docker Desktop。
3. 安裝完成後，打開命令列輸入 `docker --version`，以確認 Docker 是否安裝成功。

## 安裝 Docker Compose

[Docker Compose](https://docs.docker.com/compose/) 是 Docker 的輔助工具，用於定義和運行多個容器的應用程式。可透過 `docker-compose.yml` 檔案來設定應用程式的服務、網路及存取配置。

1. 在已安裝 Docker Engine 的環境中，您可以透過套件管理工具或二進位檔案來安裝 Docker Compose。
  - 在 Linux 上，可以執行以下指令來安裝 Docker Compose：
    ```sh
    sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -Po '"tag_name": "\K.*\d')" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    ```
  - 在 Windows 和 macOS 上，Docker Compose 已經包含在 Docker Desktop 中，因此無需另外安裝。
2. 安裝完成後，執行 `docker-compose --version`，以確認 Docker Compose 是否安裝成功。
