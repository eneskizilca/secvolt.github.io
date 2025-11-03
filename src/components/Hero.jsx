function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-400 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary-200 dark:bg-primary-700 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Güvenli Şarj Çözümleri
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Elektrikli Araç Şarjında
            <br />
            <span className="text-gradient glow">Güvenlik ve Yenilik</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            SecVolt ile elektrikli araç şarj istasyonlarınızı güvenli, akıllı ve gelecek teknolojisiyle donatın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Hemen Başlayın
            </button>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-2 border-gray-200 dark:border-gray-700"
            >
              Daha Fazla Bilgi
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Kurulum</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Güvenilirlik</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Destek</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

