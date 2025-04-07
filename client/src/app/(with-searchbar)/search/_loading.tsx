/**
 * loading.tsx(Loading 컴포넌트) 사용시 주의사항.
 *
 * 1) search > setting > page.tsx 가 존재한다고 가정할때,
 *   -> 마치 Layout 처럼 search 하위의 비동기 setting 화면도 스트리밍이 적용된다.
 * 2) Loading 컴포넌트는 async 비동기 컴포넌트에만 스트리밍을 제공한다.
 * 3) Loading 컴포넌트는 Page 컴포넌트에만 스트리밍을 설정할 수 있다.
 *   -> 세밀하게 그외에 컴포넌트에도 적용하기 위해선 Suspense 사용해야함
 * 4) Loading 컴포넌트는 query string 이 변경될 때에는 스트리밍이 동작하지 않는다.
 *   -> query string 이 변경될 때에도 스트리밍이 동작하려먼 Suspense 사용해야함
 */
export default function Loading() {
  return <div>Loading ...</div>;
}
