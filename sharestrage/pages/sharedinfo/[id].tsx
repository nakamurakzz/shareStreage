import React from "react"
import Router from "next/router"
import { GetServerSideProps } from "next"

type Props = {
  sharedInfo: {
    id: number;
    formatDate: string;
    sharedToOrFrom: string;
    sharedTypeId: number;
    messageTitle: string;
    messageBody: string;
  }
}

const SharedInfoDetail: React.FC<Props> = (props) => {
  const {sharedInfo} = props
  console.log(sharedInfo)
  return (
    <>
      <div>
        <h1>件名：{sharedInfo.messageTitle}</h1>
        <main>
          <table className="table">
            <tr className="th">
              <th>送受信日</th>
              <th>宛先/送り元</th>
              <th>送信/受信</th>
              <th>メッセージ本文</th>
            </tr>
            <tr>
              <td>{sharedInfo.formatDate}</td>
              <td>{sharedInfo.sharedToOrFrom}</td>
              <td>{sharedInfo.sharedTypeId==0?"送信":"受信"}</td>
              <td>{sharedInfo.messageBody}</td>
            </tr>
          </table>
          <div onClick={() => Router.push('/sharedinfo', `/sharedinfo`)} >一覧に戻る</div>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const res = await fetch(`http://localhost:3000/api/sharedinfo/${params.id}`)
  const sharedInfo = await res.json()
  return {
    props: {sharedInfo},
  }
}

export default SharedInfoDetail
