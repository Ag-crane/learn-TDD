// describe("template spec", () => {
//   it("passes", () => {
//     cy.visit("http://localhost:3000");

//     cy.get("button").click();
//     cy.get("button").should("have.text", "click: 1");

//     for (let i = 0; i < 10; i++) {
//       cy.get("button").click();
//     }
//     cy.get("button").should("have.text", "click: 10");
//   });
// });
describe('eclass test', () => {
  // it('login', () => {
  //   cy.visit('https://eclass.dongguk.edu/')
  //   // 내부 frame 요소에 접근
  //   cy.get('frame[name="main"]').then($frame => {
  //     const $body = $frame.contents().find('body')
  //     cy.wrap($body).find('div[class="login"]').should('be.visible')
  //     cy.wrap($body).find('div[class="login"]>ul>li>a').click()
  //     cy.wrap($body).find('input[id="id"]').should('be.visible').type('2018111750')
  //     cy.wrap($body).find('input[id="pw"]').should('be.visible').type('dmsgkrdk7603!')
  //     cy.wrap($body).find('a[class="loginBtn"]').should('be.visible').click()

  //     // 로그인 후 뜨는 팝업의 close 버튼 클릭하기
  //     // cy.wrap($body).find('button[title="close"]').should('be.visible').click()
  //   })
  // })
  // it('quick-banner', () => {
  //   cy.visit('https://eclass.dongguk.edu/')
  //   // 내부 frame 요소에 접근
  //   cy.get('frame[name="main"]').then($frame => {
  //     const $body = $frame.contents().find('body')
  //     cy.wrap($body).find('div[class="quick-banner"]').should('be.visible')
  //     for (let i = 1; i < 7; i++) {
  //       cy.wrap($body)
  //         .find(`div[class="quick-banner"] > ul > li:nth-child(${i})`)
  //         .should('have.css', 'background-color', 'rgb(243, 216, 107)')
  //     }
  //     cy.wrap($body)
  //       .find('div[class="quick-banner"] span:contains("동국대학교")')
  //       .click()
  //   })
  // })
  it('nav', () => {
    cy.visit('https://eclass.dongguk.edu/')
    // 내부 frame 요소에 접근
    cy.get('frame[name="main"]').then($frame => {
      const $body = $frame.contents().find('body')
      cy.wrap($body).find('li[class="drop"]').should('be.visible')
      cy.wrap($body).find('li[class="drop"]>ul[class="sub_menu"]').should('have.css', 'display', 'none')
      cy.wrap($body).find('li[class="drop"]:first-child').trigger('mouseover').should('have.css', 'display', 'inline-block')
      cy.wrap($body).find('li[class="drop"]:first-child').trigger('mouseout').should('have.css', 'display', 'none')
      cy.wrap($body).find('li[class="drop"]>ul[class="sub_menu"]').should('have.css', 'display', 'none')
      cy.wrap($body).find('li[class="drop"]:nth-child(2)').trigger('mouseover').should('have.css', 'display', 'inline-block')
      cy.wrap($body).find('li[class="drop"]:nth-child(2)').trigger('mouseout').should('have.css', 'display', 'none')
    })
  });
  
})
