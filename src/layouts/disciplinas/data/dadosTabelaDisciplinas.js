import MDTypography from "components/MDTypography";

export default function dadosTabelaDisciplinas() {
  return {
    columns: [
      { Header: "disciplina", accessor: "disciplina", align: "left" },
      { Header: "professor", accessor: "professor", align: "left" },
      { Header: "tipo", accessor: "tipo", align: "center" },
    ],
    rows: [
      {
        disciplina: (
          <MDTypography variant="caption" fontWeight="medium">
            Economia
          </MDTypography>
        ),
        professor: <MDTypography variant="caption">Demétrio</MDTypography>,
        tipo: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            Obrigatória
          </MDTypography>
        ),
      },
      {
        disciplina: (
          <MDTypography variant="caption" fontWeight="medium">
            Projeto de P&D
          </MDTypography>
        ),
        professor: <MDTypography variant="caption">Supervisão voluntária</MDTypography>,
        tipo: (
          <MDTypography variant="caption" color="success" fontWeight="medium">
            Atividade Voluntária
          </MDTypography>
        ),
      },
    ],
  };
}