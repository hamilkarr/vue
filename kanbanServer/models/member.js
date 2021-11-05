const {
  sequelize,
  Sequelize: { QueryTypes },
} = require("./index");

const member = {
  /** 회원 가입 */
  join(data) {},
  /** 회원정보 수정 */
  update(data) {},
};

module.exports = member;
