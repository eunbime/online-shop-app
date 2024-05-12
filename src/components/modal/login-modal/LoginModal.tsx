import React from 'react';
import Modal from '../Modal';

function LoginModal() {
  return (
    <Modal>
      <h2 className="font-bold text-3xl text-center my-12">로그인</h2>
      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-1.5 w-full ">
          <label htmlFor="email" className="text-sm font-medium text-gray-800">
            이메일
          </label>
          <input
            id="email"
            type="email"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <div className="grid gap-y-1.5 w-full">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-800"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <button
          className="mt-2 border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white "
          data-color="black"
        >
          로그인하기
        </button>
      </section>
    </Modal>
  );
}

export default LoginModal;
