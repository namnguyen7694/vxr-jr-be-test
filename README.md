# Ticket Service Base

Skeleton Node.js service dùng Express cho hai nghiệp vụ đặt vé và thanh toán. Dữ liệu chỉ nằm trong memory và payment là mock.

## Chạy local

```bash
npm install
npm run dev
```

Service mặc định chạy tại `http://localhost:3000`.

## API chính

| Method | Endpoint | Mục đích |
| --- | --- | --- |
| GET | `/health` | Health check |
| POST | `/api/tickets` | Tạo booking ở trạng thái `PENDING_PAYMENT` |
| GET | `/api/tickets/:ticketId` | Xem thông tin vé |
| POST | `/api/payments/tickets/:ticketId` | Mock thanh toán, sau đó chuyển vé sang `CONFIRMED` |

### Tạo vé

```bash
curl -X POST http://localhost:3000/api/tickets \
  -H 'Content-Type: application/json' \
  -d '{"userId":"user-1","eventId":"event-1","quantity":2,"unitPrice":100000}'
```

### Thanh toán vé

```bash
curl -X POST http://localhost:3000/api/payments/tickets/TICKET_ID \
  -H 'Content-Type: application/json' \
  -d '{"method":"MOCK"}'
```

Trạng thái hiện tại: `PENDING_PAYMENT` và `CONFIRMED`. Payment thành công sẽ cập nhật vé sang `CONFIRMED` thông qua ticket service.

## Cấu trúc

```text
src/
  app.js
  server.js
  config.js
  store.js
  controllers/
  routes/
  services/
```
