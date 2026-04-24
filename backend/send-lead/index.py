import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '—')
    phone = body.get('phone', '—')
    email = body.get('email', '—')
    marketplace = body.get('marketplace', '—')

    mp_map = {
        'wb': 'Wildberries',
        'ozon': 'Ozon',
        'ym': 'Яндекс Маркет',
        'all': 'Все площадки',
    }
    mp_label = mp_map.get(marketplace, marketplace)

    text = (
        "🛒 <b>Новая заявка с сайта TopSeller</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        f"📧 <b>Email:</b> {email}\n"
        f"🏪 <b>Маркетплейс:</b> {mp_label}"
    )

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = 1898516482

    url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'}, method='POST')
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True, 'message_id': result.get('result', {}).get('message_id')})
    }