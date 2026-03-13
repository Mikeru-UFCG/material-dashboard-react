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
import { useEffect, useMemo, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dadosTabelaAlunos from "layouts/alunos/data/dadosTabelaAlunos";

const MOCKABLE_URL = "https://demo4466588.mockable.io/equipe-projeto";

const fallbackMembros = [
  {
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=100&h=100&q=80",
    nomeCompleto: "Miguel Macedo Ferreira",
    matricula: "121110391",
    email: "miguel.macedo.ferreira@academico.ufcg.edu.br",
    ativo: true,
    dataInicio: "01/03/2026",
  },
];

function Alunos() {
  const [membros, setMembros] = useState(fallbackMembros);

  useEffect(() => {
    const carregarMembros = async () => {
      try {
        const response = await fetch(MOCKABLE_URL);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setMembros(data);
        } else if (Array.isArray(data?.membros) && data.membros.length > 0) {
          setMembros(data.membros);
        }
      } catch (error) {
        setMembros(fallbackMembros);
      }
    };

    carregarMembros();
  }, []);

  const { columns, rows } = useMemo(() => dadosTabelaAlunos(membros), [membros]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Equipe do Projeto da Disciplina
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Alunos;