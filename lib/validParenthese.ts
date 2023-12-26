/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.
  3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
  Input: s = "()"
  Output: true

Example 2:
  Input: s = "()[]{}"
  Output: true

Example 3:
  Input: s = "(]"
  Output: false

Constraints:
  1 <= s.length <= 10^4
  s consists of parentheses only '()[]{}'.
*/

/*
Comment:
  35 min. (시간을 이렇게나 많이 쓰다니...)
  한동안 실무로 인해 알고리즘과 멀리 했더니, 취준할 때 쉽게 풀었던 문제도 한참 헤맸다.
  거기다 복잡도도 상당하다. 손 놓고 있지 말고 조금씩 알고리즘도 해야겠다..
*/

const validParentheses = (s: string): boolean => {
  // s 순회
  // 하나씩 stack에 집어 넣기
  // 짝을 만나면 비우기
  // 최종 빈 값일 때 true
  if (s.length % 2) {
    return false;
  }

  const stack: string[] = [];
  const leftBrackets = ["(", "{", "["];
  const brackets: {
    [key: string]: string
  } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (leftBrackets.indexOf(char) !== -1) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();

      if (!lastBracket) {
        return false;
      }

      if (brackets[lastBracket] !== char) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

export default validParentheses;
