# Junior Review Task

Bạn được giao review service đặt vé hiện tại trước khi team đưa lên production.

## Bối cảnh

- Service dùng Node.js và Express.
- Hiện chưa có database hoặc external service thật.
- Payment hiện là mock.
- Sau khi thanh toán thành công, ticket được cập nhật sang `CONFIRMED`.
- Code được cố tình giữ đơn giản để tập trung vào chất lượng thiết kế và khả năng vận hành.

## Yêu cầu ứng viên

1. Chạy service và thử các API trong `README.md`.
2. Review source như một pull request.
3. Liệt kê các vấn đề theo mức độ ưu tiên, giải thích tác động và cách cải thiện.
4. Chọn tối đa ba vấn đề quan trọng nhất để sửa bằng code hoặc pseudocode.
5. Nêu thêm test cases cần có trước khi merge.

## Gợi ý phạm vi review

- Hiệu năng khi số lượng vé tăng mạnh.
- Tính đúng đắn khi có request đồng thời hoặc request lặp.
- Quan hệ giữa luồng đặt vé và thanh toán.
- Validation, error handling và bảo mật API.
- Khả năng thay thế in-memory/mock implementation bằng hệ thống thật.

## Business flow

```text
POST /api/tickets
  -> tạo ticket với trạng thái PENDING_PAYMENT

POST /api/payments/tickets/:ticketId
  -> xử lý thanh toán
  -> cập nhật ticket sau khi thanh toán thành công
```

Ứng viên không cần giữ nguyên thiết kế hiện tại. Có thể đề xuất hoặc triển khai cách tổ chức payment workflow, repository và state transition phù hợp hơn.

Không cần triển khai database, authentication hoặc tích hợp payment provider thật.
