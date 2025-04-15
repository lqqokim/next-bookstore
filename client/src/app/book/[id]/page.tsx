import * as React from "react";
import { notFound } from "next/navigation";
import style from "./page.module.css";

/**
 * generateStaticParams: 빌드시 미리 경로 생성
 * dynamicParams: 동적 파라미터 허용 여부 설정
 */

// export const dynamicParams = false; // false: generateStaticParams 에서 정의한 값만 허용 (Static Only) 나머지는 무조건 404
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({ params }: { params: { id: string } }) {
  /**
   * dynamic route(/book/[id]) 에서 generateStaticParams() 사용시 params는 기본적으로 Promise
   */
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();

  const {
    // id: bookId,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
