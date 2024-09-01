import chat2 from './assets/img/chat2.png'
import chat3 from './assets/img/chat3.png'

export default function App() {
  return (
    <>
      <div className="w-[100%] h-dvh bg-primary font-mono overflow-auto">
        <div className="w-5/6 h-auto py-5 m-auto text-text">
          <h2 className="text-5xl mt-5">STOPPPP🚫!</h2>
          <img src={chat2} alt="foto1" className="mt-5 rounded-lg" />
          <p className='mt-5'>Hhhhhhhhhhhh</p>
          <p className='mt-2'>Kebanyakan orang yang mau bertanya kenapa harus macet macet seperti: </p>
          <p className='mt-2 w-fit px-3 bg-text text-primary'><b>Foo: </b>Halo mau tanya dong...</p>
          <p className='mt-2 w-fit px-3 bg-text text-primary'><b>Bar: </b>Iya kenapa?</p>
          <p className='mt-2 w-fit px-3 bg-text text-primary'><b>Foo: </b>Mau tanya dong...</p>
          <p className='mt-2 w-fit px-3 bg-text text-primary'><b>Bar: </b>Tanya apa?</p>
          <p className='mt-2 font-bold text-[red]'>Stop bertanya untuk ditanya!</p>
          <p className='mt-2 w-fit px-3 bg-text text-primary'><b>Foo: </b>Kodinganku kok error ya?</p>
          <p className='mt-2 w-fit px-3 bg-text text-primary'><b>Bar: </b>Yha ga tau, kamu pikir aku dukun?</p>
          <p className='mt-2'>Padahal yang mau ditanyain itu ini 👇</p>
          <p className='mt-2 w-fit px-3 bg-text text-primary'>Halo mau tanya dong, kan aku lagi nyobain pake tailwind di react+vite nah tapi   kenapa kok tailwindnya ga ke baca gitu ya... padahal sudah diinstall semua   tailwind.config.js dan index.css nya juga sudah ada   tapi masih muncul error kaya gini (kirim foto) ada solusinya ga?</p>
          <p className='mt-2 text-xl font-bold text-secondary'>Nah kalo begini kan lebih enak...</p>
          <p className='mt-2'>Dan orang yang ditanya pun lebih mudah buat memahami apa yang ditanya   dan lebih mudah juga buat bantuin nyari solusinya.</p>
          <p className='mt-2'>Dari pada kamu tanya macet macet, yang ditanya pun juga bingung ini masalah yang mau ditanya itu apa,  
            apa lagi kalau tiba tiba nanya <span className='bg-text text-primary'>"Kodinganku kok error ya?? padahal kemarin aman"</span> 💀yah yang ngoding siapa?  
            tanya ke siapa? ya ga tau lahhh.
          </p>
          <p className='mt-10 text-5xl'>KALO  MAU NANYA ✅</p>
          <p className='mt-2'>Kalau mau bertanya tentang apapun itu khususnya nanyain kodingan apalagi yang ribettt, coba pake format ini: </p>
          <div className="mt-2 text-[red]">Contoh kalau lagi nanya kodingan error</div>
          <ul className='mt-2 list-disc'>
            <li>Lagi buat/ngerjain project apa.</li>
            <li>Teknologi atau bahasa yang sedang dipakai.</li>
            <li>Message errornya (bisa di foto / screenshot)</li>
            <li>Errornya habis kamu tambahin/ubah kodingan apa?</li>
            <li>Apa yang sudah kamu coba buat selesaiin errornya?</li>
          </ul>
          <p className='mt-5 text-secondary'>Nah kurang lebih begitu lah</p>
          <p className='mt-2'>Jadinya kaya begini: </p>
          <img src={chat3} alt="foto" className='mt-5' />
          <p className='mt-2'>Kan kalo yang tanya begini enaaaak, yang ditanya ga perlu mikir keras buat nebak errornya  
          dari chat yang cuma <span className='bg-text text-primary'>"Kodinganku kok error ya?? padahal barusan aman"</span> hadeeeh, 
          terus kalo ditanya <span className='bg-text text-primary'>"Errornya kenapa?"</span> jawabnya <span className='bg-text text-primary'>"Ga tauu hehe"</span> terus yang tau SIAPAAAAAAA? apalagi kalo masalahnya ternyata cuma typo kann..... ugh <s>k</s>sabar 💢
          </p>
          <p className='my-10 text-center text-5xl'>Ya udah gitu aja <span className='text-lg'>bye 👋</span></p>
          <p className='text-center'><small>Made By <a href="https://radya.fun" target='_blank'>Radya</a></small></p>
        </div>
      </div>
    </>
  )
} 