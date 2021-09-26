import React from "react"
import Router from 'next/router'
import { GetServerSideProps } from "next"

type Props = {
  sharedInfoArray: {
    id: number;
    formatDate: string;
    sharedToOrFrom: string;
    sharedTypeId: number;
    messageTitle: string;
  }[]
}

const Drafts: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <h1>ファイル共有一覧</h1>
        <main>
          <table className="table">
            <tr className="th">
              <th>送受信日</th>
              <th>件名</th>
              <th>宛先/送り元</th>
              <th>送信/受信</th>
              <th></th>
            </tr>
          {props.sharedInfoArray.map((sharedInfo) => (
            <tr key={sharedInfo.id}>
              <td>{sharedInfo.formatDate}</td>
              <td>{sharedInfo.messageTitle}</td>
              <td>{sharedInfo.sharedToOrFrom}</td>
              <td>{sharedInfo.sharedTypeId==0?"送信":"受信"}</td>
              <td onClick={() => Router.push('/sharedinfo/[id]', `/sharedinfo/${sharedInfo.id}`)}>⇒詳細へ</td>
            </tr>
          ))}
          </table>
        </main>
      </div>
      <style jsx>{`
        h1 {
          margin: 1rem
        }
        .table {
          border-collapse: collapse;
          border:1px solid #333;
          width: 80%;
          margin: 1rem;
        }

        th {
          border:1px solid;
          background:skyblue;
        }

        td {
          border:1px solid;
          background:#ffffff;
        }
      `}</style>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/sharedinfo")
  const sharedInfoArray = await res.json()
  return {
    props: { sharedInfoArray },
  }
}

export default Drafts
