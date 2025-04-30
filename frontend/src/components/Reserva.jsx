const Reserva = () => {
    return (
        <main className="pb-[12em]">
  <div className="h-[85vh] px-[6rem] py-[5rem]">
    <form className="p-0 pb-8 max-w-[600px] mx-auto rounded-lg">
      <h2 className="text-center text-[#333] mb-5 font-serif tracking-widest text-5xl px-2 pb-4 mt-[20px]">RESERVA</h2>
      <section className="mb-4">
        <label htmlFor="name" className="text-[16px] text-[#555] mb-2 block">*Nombre y Apellido</label><input type="text" id="name" name="name" required className="w-full px-3 py-2 mb-4 border border-[#b6a2c6] rounded-full text-[16px] focus:outline-none focus:ring-2 focus:ring-purple-400" />
      </section>
      <section className="mb-4">
        <label htmlFor="number" className="text-[16px] text-[#555] mb-2 block">*Celular o Teléfono</label><input type="tel" id="number" name="number" required className="w-full px-3 py-2 mb-4 border border-[#b6a2c6] rounded-full text-[16px] focus:outline-none focus:ring-2 focus:ring-purple-400" />
      </section>
      <section className="mb-4">
        <label htmlFor="comments" className="text-[16px] text-[#555] mb-2 block">*Observaciones (Alergia a algún químico, piel sensible, etc...)</label><textarea id="comments" name="comments" rows="3" required className="w-full px-3 py-2 mb-4 border border-[#b6a2c6] rounded-xl text-[16px] resize-y focus:outline-none focus:ring-2 focus:ring-purple-400" />
      </section>
      <section className="mb-4">
        <label htmlFor="service" className="text-[16px] text-[#555] mb-2 block">*Selecciona el servicio</label><select id="service" name="service" required className="w-full px-3 py-2 mb-4 border border-[#b6a2c6] rounded-full text-[16px] focus:outline-none focus:ring-2 focus:ring-purple-400"><option value="">--Elige un servicio--</option><option value="manicure">Manicura</option><option value="pedicure">Pedicura</option><option value="haircut">Corte de cabello</option><option value="facial">Tratamiento Facial</option></select>
      </section>
      <section className="mb-4">
        <label htmlFor="date" className="text-[16px] text-[#555] mb-2 block">*Fecha de Reserva</label><input type="date" id="date" name="date" required className="w-full px-3 py-2 mb-4 border border-[#b6a2c6] rounded-full text-[16px] focus:outline-none focus:ring-2 focus:ring-purple-400" />
      </section>
      <section className="mb-4">
        <label htmlFor="guests" className="text-[16px] text-[#555] mb-2 block">*Número de Personas</label><input type="number" id="guests" name="guests" min="1" placeholder="Número de personas" required className="w-full px-3 py-2 mb-4 border border-[#b6a2c6] rounded-full text-[16px] focus:outline-none focus:ring-2 focus:ring-purple-400" />
      </section>
      <section className="mb-4">
        <button type="submit" className="w-full py-3 bg-[#d88fbd] text-white font-bold text-[16px] rounded-full transition duration-500 hover:bg-[#fcb7e2] focus:outline-none">Reservar Ahora</button>
      </section>
    </form>
  </div>
</main>

    )
}

export default Reserva;