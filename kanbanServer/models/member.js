const {
  sequelize,
  Sequelize: { QueryTypes },
} = require("./index");
const bcrypt = require("bcrypt");

const member = {
  /** 회원 가입 */
  async join(data) {
    await this.checkJoinData(data);
    try {
      const sql = `Insert Into member(memId, memPw, memNm,cellPhone) Values(:memId, :memPw, :memNm, :cellPhone)`;

      const hash = data.memPw ? await bcrypt.hash(data.memPw, 10) : "";
      let cellPhone = "";
      if (data.cellPhone) {
        cellPhone = data.cellPhone.replace(/[^0-9]/g, "");
      }
      const replacements = {
        memId: data.memId,
        memPw: hash,
        memNm: data.memNm,
        cellPhone,
      };
      const result = await sequelize.query(sql, {
        replacements,
        type: QueryTypes.INSERT,
      });

      const memNo = result[0];
      const memberInfo = await this.get(memNo);

      return memberInfo;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  /** 회원정보 수정 */
  update(data) {
    console.log(data);
  },

  /** 회원 가입 유효성 검사
   *  1. 필수 항목 체크(memId, memPw, memPwRe, memNm)
   *  2. 아이디 체크 (알파벳 + 숫자, 자리수 6 이상)
   *  3. 중복 아이디 체크
   *  4. 비밀번호 체크(자리수 8자리 이상, 알파벳 + 숫자 + 특수문자)
   *  5. 휴대전화번호는 숫자로만
   */
  async checkJoinData(data) {
    // 1. 필수항목 체크
    const required = {
      memId: "아이디를 입력하세요",
      memPw: "비밀번호를 입력하세요",
      memPwRe: "비밀번호를 확인하세요",
      memNm: "비밀번호를 입력하세요",
    };
    for (let key in required) {
      if (!data[key] || (data[key] && data[key].trim() == "")) {
        throw new Error(required[key]);
      }
    }
    //2. 아이디 체크
    const memId = data.memId;
    if (memId.length < 6) {
      throw new Error("아이디는 6자리 이상 입력하세요.");
    }

    if (/[^a-z0-9]/i.test(memId)) {
      throw new Error("아이디는 알파벳과 숫자로만 입력하세요.");
    }
    //3 중복 아이디 체크
    const sql = "Select Count(*) cnt From member Where memId =?";
    const rows = await sequelize.query(sql, {
      replacements: [memId],
      type: QueryTypes.SELECT,
    });

    if (rows[0].cnt > 0) {
      throw new Error("이미 가입된 아이디 입니다.-" + memId);
    }
    //4. 비밀번호 체크
    const memPw = data.memPw;
    if (memPw.length < 8) {
      throw new Error("비밀번호는 8자리 이상 입력하세요");
    }
    if (
      !/[a-z]/i.test(memPw) ||
      !/[0-9]/.test(memPw) ||
      !/[~!@#$%^&*()]/.test(memPw)
    ) {
      throw new Error(
        "비밀번호는 알파벳, 숫자, 특수문자를 각각 1개씩 입력해야 합나다"
      );
    }
    //5. 비밀번호 확인
    if (memPw != data.memPwRe) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
    //6. 휴대전화번호 형식 체크
    if (data.cellPhone) {
      let cellPhone = data.cellPhone;
      cellPhone = cellPhone.replace(/[^0-9]/g, "");
      const pattern = /^01[016789][0-9]{3,4}[0-9]{4}$/;
      if (!pattern.test(cellPhone)) {
        throw new Error("올바른 휴대전화 번호가 아닙니다.");
      }
    }
  },

  /** 회원 정보 조회
   * @param memNo - 정수: 회원번호, 문자: 아이디
   */
  async get(memNo) {
    try {
      let fields = "memNo";
      if (typeof memNo == "string") {
        fields = "memId";
      }
      const sql = `Select * From member Where ${fields} = ?`;
      const rows = await sequelize.query(sql, {
        replacements: [memNo],
        type: QueryTypes.SELECT,
      });
      if (rows.length == 0) {
        // 회원정보가 없는 경우
        return false;
      }
      const data = rows[0];
      delete data.memPw;
      return data;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};

module.exports = member;
