---
sidebar_position: 4
---

# CLI 指令參考

## fugletrader quote

顯示最新股價。

```bash
fugletrader quote <symbol...>
fugletrader q <symbol...>
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<symbol...>` | 股票代號。 |

## fugletrader watchlist

管理觀察清單。

```bash
fugletrader watchlist
fugletrader w
```

### list

列出所有觀察清單。

```bash
fugletrader watchlist list
fugletrader w list
```

### new

建立新的觀察清單。

```bash
fugletrader watchlist new <list-name>
fugletrader w new <list-name>
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<list-name>` | 觀察清單名稱。 |

### view

查看觀察清單。

```bash
fugletrader watchlist view <list-name>
fugletrader w view <list-name>
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<list-name>` | 觀察清單名稱。 |

### add

將指定的股票代號加入至觀察清單。

```bash
fugletrader watchlist add <list-name> [options]
fugletrader w add <list-name> [options]
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<list-name>` | 觀察清單名稱。 |

#### Options

| Option       | Description  |
| ------------ | ------------ |
| `-s, --symbol [code]` | 股票代號（使用逗號 `,` 分隔多個股票代號）。 |

### remove

從觀察清單中移除指定的股票代號。

```bash
fugletrader watchlist remove <list-name> [options]
fugletrader w remove <list-name> [options]
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<list-name>` | 觀察清單名稱。 |

#### Options

| Option       | Description  |
| ------------ | ------------ |
| `-s, --symbol [code]` | 股票代號（使用逗號 `,` 分隔多個股票代號）。 |

### delete

刪除觀察清單。

```bash
fugletrader watchlist delete <list-name>
fugletrader w delete <list-name>
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<list-name>` | 觀察清單名稱。 |

## fugletrader place

委託下單。

```bash
fugletrader place <symbol> [options] 
fugletrader trade <symbol> [options]
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<symbol>` | 股票代號。 |

#### Options

| Option       | Description  |
| ------------ | ------------ |
| `-b, --buy`  | 下委買單。 |
| `-s, --sell` | 下委賣單。 |


## fugletrader relace

修改進行中的委託單。

```bash
fugletrader replace <order-id> [options] 
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<order-id>` | 委託書號。 |

#### Options

| Option                    | Description  |
| ------------------------- | ------------ |
| `-p, --price [number] `   | 設定委託單的新價格。 |
| `-q, --quantity [number]` | 設定委託單的新數量。 |

## fugletrader cancel

取消進行中的委託單。

```bash
fugletrader cancel <order-id>
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `<order-id>` | 委託書號。 |

## fugletrader orders

顯示現有的委託單。

```bash
fugletrader orders
```

## fugletrader transactions

顯示交易紀錄。

```bash
fugletrader transactions [options] 
fugletrader tx [options] 
```

#### Options

| Option                        | Description  |
| ----------------------------- | ------------ |
| `-d, --duration [duration]`   | 指定時間範圍 (`0d`, `3d`, `1m`, `3m`)。 |
| `-start, --start-date [date]` | 指定開始日期（`YYYY-MM-DD`）。 |
| `-end, --end-date [date]`     | 指定結束日期（`YYYY-MM-DD`）。 |

## fugletrader inventories

顯示庫存損益。

```bash
fugletrader inventories
fugletrader positions
```

## fugletrader settlements

顯示交割資訊。

```bash
fugletrader settlements
```

## fugletrader balance

顯示銀行餘額。

```bash
fugletrader balance
```

## fugletrader webhook

設定 Webhook。

```bash
fugletrader webhook [name]
```

| Argument | Description  |
| -------- | ------------ |
| `<name>` | 訊號名稱。 |

## fugletrader config

設定配置變數。

```bash
fugletrader config
```

### get

取得指定變數的值。

```bash
fugletrader config get <key>
```

| Argument | Description  |
| -------- | ------------ |
| `<key>` | 取得指定變數的值。 |

### set

設定指定變數的值。

```bash
fugletrader config set <key=value>
```

| Argument | Description  |
| -------- | ------------ |
| `<key=value>` | 設定指定變數的值。 |

## fugletrader help

顯示幫助資訊。

```bash
fugletrader help
```
