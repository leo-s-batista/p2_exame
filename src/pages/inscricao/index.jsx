import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputMask from 'react-input-mask';
import { api } from '../../axios.js'
import { ErrorView } from './error.jsx';
import { SuccessView } from './success.jsx';


import './styles.scss';

export function Inscricao() {

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    funcaoPretendida: '',
    nome: '',
    ctpsNumero: '',
    serie: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    orgaoEmissor: '',
    endereco: '',
    numero: '',
    bairro: '',
    municipio: '',
    uf: '',
    cep: '',
    naturalidade: '',
    telefone: '',
    celular: '',
    email: '',
    tituloEleitorNumero: '',
    zona: '',
    numeroPis: '',
    cartHabilitacaoNumero: '',
    nomePai: '',
    nomeMae: '',
    grauInstrucao: '',
    curso: '',
    estadoCivil: '',
    nomeConjuge: '',
    residencia: '',
    certidaoMilitarNumero: '',
    serieMilitar: '',
    categoria: '',
    possuiFilhos: ''
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    setValidated(true);

    event.preventDefault();

    if (form.checkValidity()) {
      api.post('/inscricao', formValues).then((response) => {
        setSent(true);
      }).catch((error) => {
        console.log(error);
        setSent(true);
        setError(true);
      });
    }
  };

  const handleReset = () => {
    setSent(false);
    setError(false);
    setValidated(false);
    setFormValues({
      funcaoPretendida: '',
      nome: '',
      ctpsNumero: '',
      serie: '',
      dataNascimento: '',
      cpf: '',
      rg: '',
      orgaoEmissor: '',
      endereco: '',
      numero: '',
      bairro: '',
      municipio: '',
      uf: '',
      cep: '',
      naturalidade: '',
      telefone: '',
      celular: '',
      email: '',
      tituloEleitorNumero: '',
      zona: '',
      numeroPis: '',
      cartHabilitacaoNumero: '',
      nomePai: '',
      nomeMae: '',
      grauInstrucao: '',
      curso: '',
      estadoCivil: '',
      nomeConjuge: '',
      residencia: '',
      certidaoMilitarNumero: '',
      serieMilitar: '',
      categoria: '',
      possuiFilhos: ''
    });
  }

  return (
    sent ? (error ? <ErrorView /> : <SuccessView handleReset={handleReset} />) :
      <div className="inscricao">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group>
              <Form.Label>Função Pretendida</Form.Label>
              <Form.Control
                required
                type="text"
                value={formValues.funcaoPretendida}
                onChange={(e) => setFormValues({ ...formValues, funcaoPretendida: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                type="text"
                value={formValues.nome}
                onChange={(e) => setFormValues({ ...formValues, nome: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Ctps n°</Form.Label>

              <InputMask value={formValues.ctpsNumero}
                onChange={(e) => setFormValues({ ...formValues, ctpsNumero: e.target.value })} mask="9999999/999-9" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="[0-9]{7}/[0-9]{3}-[0-9]" type="text" required />}
              </InputMask>

              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" >
              <Form.Label>Série</Form.Label>
              <Form.Control type="text" required value={formValues.serie}
                onChange={(e) => setFormValues({ ...formValues, serie: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" required value={formValues.dataNascimento}
                onChange={(e) => setFormValues({ ...formValues, dataNascimento: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" >
              <Form.Label>CPF</Form.Label>
              <InputMask value={formValues.cpf}
                onChange={(e) => setFormValues({ ...formValues, cpf: e.target.value })} mask="999.999.999-99" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" >
              <Form.Label>RG</Form.Label>
              <InputMask value={formValues.rg}
                onChange={(e) => setFormValues({ ...formValues, rg: e.target.value })} mask="99.999.999-9" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9a-zA-Z]" type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Orgão Emissor</Form.Label>
              <Form.Control
                required
                type="text"
                value={formValues.orgaoEmissor}
                onChange={(e) => setFormValues({ ...formValues, orgaoEmissor: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                required
                type="text"
                value={formValues.endereco}
                onChange={(e) => setFormValues({ ...formValues, endereco: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="2">
              <Form.Label>N°</Form.Label>
              <Form.Control type="text" required value={formValues.numero}
                onChange={(e) => setFormValues({ ...formValues, numero: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" >
              <Form.Label>Bairro</Form.Label>
              <Form.Control type="text" required value={formValues.bairro}
                onChange={(e) => setFormValues({ ...formValues, bairro: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" >
              <Form.Label>Município</Form.Label>
              <Form.Control type="text" required value={formValues.municipio}
                onChange={(e) => setFormValues({ ...formValues, municipio: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" >
              <Form.Label>UF</Form.Label>
              <Form.Control pattern="[A-Za-z]{2}" maxLength={2} type="text" required value={formValues.uf}
                onChange={(e) => setFormValues({ ...formValues, uf: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Cep</Form.Label>
              <InputMask value={formValues.cep}
                onChange={(e) => setFormValues({ ...formValues, cep: e.target.value })} mask="99999-999" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="[0-9]{5}-[0-9]{3}" type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" >
              <Form.Label>Naturalidade</Form.Label>
              <Form.Control type="text" required value={formValues.naturalidade}
                onChange={(e) => setFormValues({ ...formValues, naturalidade: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Telefone</Form.Label>
              <InputMask value={formValues.telefone}
                onChange={(e) => setFormValues({ ...formValues, telefone: e.target.value })} mask="+99 (99) 99999-9999" maskChar={null}>
                {(inputProps) => <Form.Control pattern="^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$" {...inputProps} type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" >
              <Form.Label>Celular</Form.Label>
              <InputMask value={formValues.celular}
                onChange={(e) => setFormValues({ ...formValues, celular: e.target.value })} mask="+99 (99) 99999-9999" maskChar={null}>
                {(inputProps) => <Form.Control pattern="^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$" {...inputProps} type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" required value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" value={formValues.grauInstrucao}
              onChange={(e) => setFormValues({ ...formValues, grauInstrucao: e.target.value })}>
              <Form.Label className="pr-4">Grau Instrução</Form.Label>

              <div className="radio-list">
                <div className="radio-list-row">
                  <input required type="radio" id="efi" name="grauInstrucao" value="Ensino Fundamental Incompleto" />
                  <label htmlFor="efi">Ensino Fundamental Incompleto</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="efc" name="grauInstrucao" value="Ensino Fundamental Completo" />
                  <label htmlFor="efc">Ensino Fundamental Completo</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="emi" name="grauInstrucao" value="Ensino Médio Incompleto" />
                  <label htmlFor="emi">Ensino Médio Incompleto</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="emc" name="grauInstrucao" value="Ensino Médio Completo" />
                  <label htmlFor="emc">Ensino Médio Completo</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="esi" name="grauInstrucao" value="Ensino Superior Incompleto" />
                  <label htmlFor="esi">Ensino Superior Incompleto</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="esc" name="grauInstrucao" value="Ensino Superior Completo" />
                  <label htmlFor="esc">Ensino Superior Completo</label>
                </div>
              </div>





              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Curso</Form.Label>
              <Form.Control type="text" value={formValues.curso}
                onChange={(e) => setFormValues({ ...formValues, curso: e.target.value })} />
            </Form.Group>


          </Row>

          <Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Título de Eleitor N°</Form.Label>
              <InputMask value={formValues.tituloEleitorNumero}
                onChange={(e) => setFormValues({ ...formValues, tituloEleitorNumero: e.target.value })} mask="9999 9999 9999" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="[0-9]{4} [0-9]{4} [0-9]{4}" type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" >
              <Form.Label>Zona</Form.Label>
              <Form.Control type="text" required value={formValues.zona}
                onChange={(e) => setFormValues({ ...formValues, zona: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6">
              <Form.Label>N° Pis</Form.Label>

              <InputMask value={formValues.numeroPis}
                onChange={(e) => setFormValues({ ...formValues, numeroPis: e.target.value })} mask="999.99999.99-9" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="[0-9]{3}\.[0-9]{5}\.[0-9]{2}-[0-9]" type="text" required />}
              </InputMask>

              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" >
              <Form.Label>Cart. de Habilitação N°</Form.Label>
              <InputMask value={formValues.cartHabilitacaoNumero}
                onChange={(e) => setFormValues({ ...formValues, cartHabilitacaoNumero: e.target.value })} mask="99999999999" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="[0-9]{11}" type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Form.Label>Nome do Pai</Form.Label>
              <Form.Control type="text" required value={formValues.nomePai}
                onChange={(e) => setFormValues({ ...formValues, nomePai: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Form.Label>Nome da Mãe</Form.Label>
              <Form.Control type="text" required value={formValues.nomeMae}
                onChange={(e) => setFormValues({ ...formValues, nomeMae: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" value={formValues.estadoCivil}
              onChange={(e) => setFormValues({ ...formValues, estadoCivil: e.target.value })}>
              <Form.Label className="pr-4">Estado Civíl</Form.Label>

              <br />

              <div className="radio-list">
                <div className="radio-list-row">
                  <input required type="radio" id="casado" name="estadoCivil" value="Casado" />
                  <label htmlFor="casado">Casado</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="solteiro" name="estadoCivil" value="Solteiro" />
                  <label htmlFor="solteiro">Solteiro</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="divorciado" name="estadoCivil" value="Divorciado" />
                  <label htmlFor="divorciado">Divorciado</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="separado" name="estadoCivil" value="Separado" />
                  <label htmlFor="separado">Separado</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="amigo" name="estadoCivil" value="Amigo" />
                  <label htmlFor="amigo">Amigo</label>
                </div>
              </div>


              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nome do Cônjuge</Form.Label>
              <Form.Control type="text" value={formValues.nomeConjuge}
                onChange={(e) => setFormValues({ ...formValues, nomeConjuge: e.target.value })} />
            </Form.Group>


          </Row>
          <Row>
            <Form.Group value={formValues.residencia}
              onChange={(e) => setFormValues({ ...formValues, residencia: e.target.value })}>
              <Form.Label className="pr-4">Residência</Form.Label>

              <br />

              <div className="radio-list">
                <div className="radio-list-row">
                  <input required type="radio" id="casado" name="residencia" value="Própria" />
                  <label htmlFor="casado">Própria</label>
                </div>
                <div className="radio-list-row">
                  <input required type="radio" id="alugada" name="residencia" value="Alugada" />
                  <label htmlFor="alugada">Alugada</label>
                </div>
              </div>





              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Certidão Militar N°</Form.Label>
              <InputMask value={formValues.certidaoMilitarNumero}
                onChange={(e) => setFormValues({ ...formValues, certidaoMilitarNumero: e.target.value })} mask="99999999/9999" maskChar={null}>
                {(inputProps) => <Form.Control {...inputProps} pattern="[0-9]{8}/[0-9]{4}" type="text" required />}
              </InputMask>
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Série Militar</Form.Label>
              <Form.Control type="text" required value={formValues.serieMilitar}
                onChange={(e) => setFormValues({ ...formValues, serieMilitar: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" required value={formValues.categoria}
                onChange={(e) => setFormValues({ ...formValues, categoria: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group value={formValues.possuiFilhos}
              onChange={(e) => setFormValues({ ...formValues, possuiFilhos: e.target.value })}>
              <Form.Label className="pr-4">Possui Filhos ?</Form.Label>

              <Form.Check
                label="Sim"
                name="possuiFilhos"
                type="radio"
                value="Sim"
              />
              <Form.Check
                label="Não"
                name="possuiFilhos"
                type="radio"
                value="Não"
              />

              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="flex justify-center pt-6 pb-12">
            <Button variant="success" type="submit">Submit form</Button>
          </div>
        </Form>
      </div >
  );
}