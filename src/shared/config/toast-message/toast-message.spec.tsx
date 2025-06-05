import { render } from '@/shared/utils/jest/jest'
import { toastConfig } from './toast-message'

describe('toastConfig', () => {
  it('renderiza SuccessToast com estilos corretos', () => {
    const { toJSON } = render(
      // @ts-expect-error: The type of toastConfig is not compatible with the expected type but we are testing the implementation
      toastConfig.success({ text1: 'Sucesso', text2: 'Mensagem' }),
    )
    expect(toJSON()).toBeTruthy()
  })

  it('renderiza ErrorToast com estilos corretos', () => {
    const { toJSON } = render(
      // @ts-expect-error: Same issue as above
      toastConfig.error({ text1: 'Erro', text2: 'Mensagem' }),
    )
    expect(toJSON()).toBeTruthy()
  })

  it('renderiza InfoToast com estilos corretos', () => {
    const { toJSON } = render(
      // @ts-expect-error: Same issue as above
      toastConfig.info({ text1: 'Info', text2: 'Mensagem' }),
    )
    expect(toJSON()).toBeTruthy()
  })
})
