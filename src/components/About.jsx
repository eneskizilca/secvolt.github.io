function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Geleceğin Şarj Teknolojisi 
              <span className="text-gradient"> Bugün Sizinle</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              SecVolt olarak, elektrikli araç şarj altyapısında güvenlik ve verimliliği bir araya getiren 
              yenilikçi çözümler sunuyoruz. Türkiye'nin önde gelen elektrikli şarj istasyonu güvenlik 
              sistemleri sağlayıcısıyız.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Siber güvenlik, fiziksel koruma ve akıllı izleme sistemlerimiz sayesinde şarj istasyonlarınız 
              7/24 güvende. Yerli ve milli teknoloji ile üretilen çözümlerimiz, uluslararası standartlara 
              uygun ve sürekli güncellenmektedir.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">ISO 27001 Sertifikalı</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bilgi güvenliği yönetim sistemimiz uluslararası standartlara uygun</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">7/24 Teknik Destek</h4>
                  <p className="text-gray-600 dark:text-gray-300">Uzman ekibimiz her zaman yanınızda</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Yerli Üretim</h4>
                  <p className="text-gray-600 dark:text-gray-300">Türkiye'de tasarlanan ve geliştirilen teknoloji</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 p-8">
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-2xl font-bold">Güvenli ve Akıllı</p>
                    <p className="text-lg opacity-90">Şarj Çözümleri</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-300 dark:bg-primary-700 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 dark:bg-primary-600 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

