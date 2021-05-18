> Context cung cấp cho bạn một cách để truyền dữ liệu xuống cây component mà không cần phải truyền props xuống ở tất cả các cấp component.

# Tại sao lại là Context API

- React Context tồn tại để bạn không cần truyền dữ liệu một cách thủ công bằng việc sử dụng props ở tất cả các cấp của component. 

- Context chia sử dữ liệu cho nhiều các component khác nhau. Việc truyền dữ liệu từ component cha xuống component con thông qua props là tương đối dài dòng và khó kiểm sóat so với việc sử dụng Context API. Bằng việc sử dụng Context API, chúng ta không còn cần phải truyền các dữ liệu muốn chia sẻ với nhau thông qua việc dùng props.

# Dùng khi nào?

Những thứ thuộc về context là dữ liệu được coi là global như thông tin người dùng, hay thông tin giỏ hàng... Vậy các lý do khác nhau cho việc sử dụng context:
- Dữ liêụ là cần thiết ở nhiều nơi: dữ liệu cần được sử dụng bởi nhiều component như chủ đề, người dùng, giỏ hàng...
- Truyền dữ liệu qua nhiều component: sử dụng context trong trường hợp này là tốt hơn khi bạn muốn chuyển 1 giá trị props thông qua nhiều component.

# Khối xây dựng và API

Context API bao gồm một số khối xây dựng quan trọng:

- context: đối tượng context là một đối tượng lưu giữ giá trị context hiện tại và có thể được đăng ký.
- context.Provider để tham chiếu tới đối tượng content (dùng trong JSX)
- provider: là một componet của React cung cấp giá trị, nó lấy từ đối tượng context. (dùng trong JSX)
- context.consumer: là một component có thể sử dụng giá trị của provider và có thể hiển thị giá trị. (dùng trong JSX)

Đây là một phần lý thuyểt và có vẻ nó vẫn đang rất khó hiểu. Chúng ta hãy thử đi vào 1 ví dụ sau để hiểu rõ về nó hơn.

---

https://viblo.asia/p/context-api-trong-react-XL6lAovJKek