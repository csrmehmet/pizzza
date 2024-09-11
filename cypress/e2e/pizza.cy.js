describe('Pizza Order Form', () => {
  beforeEach(() => {
    cy.visit('/siparis-olustur');
  });

  it('should allow entering a name', () => {
    const name = 'John Doe';
    cy.get('input[placeholder="Adınız (en az 3 karakter)"]')
      .type(name)
      .should('have.value', name);
  });

  it('should allow selecting multiple toppings', () => {
    const toppings = ['Pepperoni', 'Sosis', 'Soğan', 'Mısır'];
    
    toppings.forEach(topping => {
      cy.contains('label', topping)
        .find('input[type="checkbox"]')
        .check()
        .should('be.checked');
    });

    // Seçilen malzeme sayısını kontrol et
    cy.contains('Şu an: 4');
  });

  it('should submit the form with valid data', () => {
    // İsim gir
    cy.get('input[placeholder="Adınız (en az 3 karakter)"]').type('John Doe');

    // Boyut seç
    cy.contains('label', 'Orta').click();

    // Hamur seç
    cy.get('select').select('Normal');

    // Malzemeler seç
    const toppings = ['Pepperoni', 'Sosis', 'Soğan', 'Mısır'];
    toppings.forEach(topping => {
      cy.contains('label', topping).find('input[type="checkbox"]').check();
    });

    // Not ekle
    cy.get('textarea[placeholder="Siparişine eklemek istediğin bir not var mı?"]')
      .type('Lütfen hızlı getirin.');

    // Formu gönder
    cy.contains('button', 'SİPARİŞ VER').click();

    // Başarı sayfasına yönlendirildiğini kontrol et
    cy.url().should('include', '/success');
    cy.contains('SİPARİŞİNİZ ALINDI!').should('be.visible');
  });
});