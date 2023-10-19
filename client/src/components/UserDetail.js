import React from "react";
import moment from "moment";
import styled from "styled-components";

const UserDetails = ({
  close,
  userName,
  _id,
  balance,
  createdAt,

  phoneNumber,
  userType,
  lastLogin,
  email,
  handleUserTransaction,
  handleSendEmail,
  handleUpgradeUser,
  accountNumbers,
}) => {
  return (
    <Wrapper>
      <div className="card" key={_id}>
        <h3 className="title">{userName}</h3>
        <div className="info">
          {/* <p>Id: {_id}</p> */}
          <p>Balance: #{balance.toFixed(2)}</p>
          <p>phone number: {phoneNumber}</p>
          <p>Account type: {userType}</p>
          <p>email: {email}</p>
          <p>
            last loggedIn:{" "}
            {(lastLogin && moment(lastLogin).startOf("hour").fromNow()) ||
              "unknown"}
          </p>
          <p>Joined on: {moment(createdAt).format("LLL")}</p>
          {accountNumbers.map((e) => {
            return (
              <p key={e.accountNumber}>
                {e.bankName}:{e.accountNumber}
              </p>
            );
          })}
        </div>
        <div className="btn-container">
          {/* <button
            className="btn m-1 btn-hipster"
            onClick={() => handleSendEmail(email)}
            key={_id}
          >
            Send Email
          </button> */}
          <button
            className="btn m-1"
            onClick={() => handleUserTransaction(userName)}
          >
            Transactions
          </button>
          {/* <button
            className="btn m-1"
            onClick={() =>
              handleUpgradeUser({ userId: _id, userType: userType })
            }
          >
            Upgrade user
          </button> */}
          {/* <button className="btn m-1 btn-danger">Delete User</button> */}
          <button onClick={close} className="btn m-1 btn-danger">
            close
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserDetails;
const Wrapper = styled.div`
  z-index: 5;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  .users {
    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  .card {
    background: var(--grey-100);
    color: var(--primary-500);
    border-radius: var(--borderRadius);
    text-align: center;
    line-height: 1;
    padding: 1rem;
    max-width: 80%;
    margin: 1rem auto;
    font-size: 1rem;
  }
  .info {
    text-align: left;
    p {
      color: var(--primary-500);
      font-weight: 600;
      font-size: 0.7rem;
      text-transform: capitalize;
      line-height: 0.1;
    }
  }
`;
