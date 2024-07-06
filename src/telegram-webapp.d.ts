// telegram-webapp.d.ts
interface Telegram {
    WebApp: {
        initData: string
        initDataUnsafe: object
        version: string
        platform: string
        colorScheme: 'light' | 'dark'
        themeParams: object
        isExpanded: boolean
        viewportHeight: number
        viewportStableHeight: number
        MainButton: any
        HapticFeedback: any
        BackButton: any
        closingConfirmation: boolean
        disableClosingConfirmation(): void
        enableClosingConfirmation(): void
        close(): void
        expand(): void
        onEvent(eventType: string, callback: Function): void
        offEvent(eventType: string, callback: Function): void
        sendData(data: string): void
    }
}

interface Window {
    Telegram: Telegram
}
