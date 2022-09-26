
const CMC7Validator = require('../bundle');
const { expect } = require('chai');

describe('CMC7Validator', () => {
  it('isValid', () => {
    expect(new CMC7Validator('450445043466147665081657326823').isValid()).to.be.true;
    expect(new CMC7Validator('56738425 8540653355 047966833262').isValid()).to.be.true;
    expect(new CMC7Validator('021672635408779395013196461480').isValid()).to.be.true;
    expect(new CMC7Validator('536363941121372575520227637152').isValid()).to.be.true;
    expect(new CMC7Validator('18776221 6209755155 974742302660').isValid()).to.be.false;
    expect(new CMC7Validator('20655696 7157073555 233774515072').isValid()).to.be.false;
    expect(new CMC7Validator('88707084 8626621732 887319657656').isValid()).to.be.false;
    expect(new CMC7Validator('94823691 282404365 734892470802').isValid()).to.be.false;
    expect(new CMC7Validator('94823691 2824043655 73489247080').isValid()).to.be.false;
    expect(new CMC7Validator('9482369 2824043655 734892470802').isValid()).to.be.false;
    expect(new CMC7Validator('94823691 2824042655 734892470802').isValid()).to.be.false;
    expect(new CMC7Validator('94823691 2824043655 732892470802').isValid()).to.be.false;
    expect(new CMC7Validator('94823621 2824043655 734892470802').isValid()).to.be.false;
  });
});
