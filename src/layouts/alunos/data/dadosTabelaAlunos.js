/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

export default function data(membros = []) {
  const Aluno = ({ image, name, email, matricula }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography display="block" variant="caption">
          {email}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          Matrícula: {matricula}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "integrante", accessor: "aluno", width: "50%", align: "left" },
      { Header: "status no projeto", accessor: "status", align: "center" },
      { Header: "início no projeto", accessor: "data_inicio", align: "center" },
    ],

    rows: membros.map((membro) => ({
      aluno: (
        <Aluno
          image={membro.foto}
          name={membro.nomeCompleto}
          email={membro.email}
          matricula={membro.matricula || "não informado"}
        />
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={membro.ativo ? "ativo" : "desativado"}
            color={membro.ativo ? "success" : "dark"}
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
      data_inicio: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {membro.dataInicio}
        </MDTypography>
      ),
    })),
  };
}