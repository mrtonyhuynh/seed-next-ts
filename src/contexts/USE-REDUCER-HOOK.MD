# Bắt đầu từ useState
Nói về React Hook, đã có nhiều bài viết về `useState`, nó cho phép chúng ta sử dụng state và các chức năng khác của React (life cycle, side effect,...) mà không cần viết class component.

```js
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

# Từ useState đến useReducer

- Vậy nếu trong trường hợp logic state của component trở nên lớn và phức tạp hợp thì khi đó dùng ta sẽ dùng một hàm hook là useReducer sẽ giúp chúng ta dễ quản lý và tổ chức state tốt hơn.

- Vậy `useReducer` là gì, thực chất là là một phiên bản nâng cao của useState, dùng trong trường hợp local state của component phức tạp, có nhiều action làm thay đổi state đó. 

- Thay vì các bạn dùng nhiều useState hoặc useState với value là nested object/array và viết nhiều function để thay đổi state thì bây giờ các bạn có thể tổ chức state và các action làm thay đổi state đó 1 cách logic nhờ useReducer

# Reducer là gì

Để sử dụng useReducer hook; đầu tiên chúng ta cần biết reducer là gì, đơn giản là một hàm có 2 tham số là state, action và trả về new state sau khi thực hiện một action, hãy tưởng tượng reducer như là một bộ chuyển đổi, nhận input, thực hiện action tác động đến input đó, rồi tạo ra output.

```js
(state, action) => newState
```

# useReducer hook

Như đã nói ở trên useReducer hook được sử dụng trong trường hợp component có state phức tạp và có nhiều action type làm thay đổi state đó.

useReducer function nhận vào reducer và initialState khởi tạo ban đầu, trả về state hiện tại và dispatch function dùng để trigger 1 action

Ok, chúng ta sẽ viết một TodoApp có thể render ra list item và toggle item đó đã hoàn thành hay chưa nhé, mình sẽ sử dụng lại todoReducer và initialTodos như trên nhé

---

https://viblo.asia/p/su-dung-usereducer-hook-trong-react-L4x5x19wKBM